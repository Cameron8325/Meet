import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('Events are collapsed by default', ({ given, when, then }) => {

    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let eventComponent
    let mockEvent;

    beforeAll(async () => {
      const allEvents = await getEvents();
      mockEvent = allEvents[0];
    });

    beforeEach(() => {
      eventComponent = render(<Event event={mockEvent} />);
    });

    given('the Meet app is open', () => {
      AppComponent = render(<App />);
    });

    when('the user views the list of events', () => {
      const AppDom = AppComponent.container.firstChild;
      const EventListDOM = AppDom.querySelector('#event-list');
      expect(EventListDOM).toBeInTheDocument;
    });

    then('each event should be collapsed by default.', () => {
      expect(eventComponent.queryByText(mockEvent.description)).not.toBeInTheDocument();
    });
    test('Expand event details', ({ given, when, then }) => {
      given('the user is viewing the details of an event', () => {
        AppComponent = render(<App />);
      });

      when('the user clicks on an event', async () => {
        const user = userEvent.setup();
        await user.click(eventComponent.queryByRole("listitem"));
      });

      then('the event details should be expanded.', () => {
        expect(eventComponent.queryByText(mockEvent.description)).toBeInTheDocument;
      });
    });

    test('Collapse event details', ({ given, when, then }) => {
      given('the user is viewing the details of an event', async () => {
        const user = userEvent.setup();
        await user.click(eventComponent.getByText("Show Details"));
        expect(eventComponent.queryByText(mockEvent.description)).toBeInTheDocument;
      });

      when('the user clicks to collapse the event details', async () => {
        const user = userEvent.setup();

        await user.click(eventComponent.getByText("Hide Details"));
        expect(eventComponent.queryByRole("button")).toHaveTextContent("Show Details");
      });

      then('the event details should be hidden.', () => {
        expect(eventComponent.queryByText(mockEvent.description)).not.toBeInTheDocument();
      });
    });

  });
});

