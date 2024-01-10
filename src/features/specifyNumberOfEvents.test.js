import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "../App";
import NumberOfEvents from "../components/NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {


  test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
    let AppComponent;

    given('the Meet app is open', () => {
      AppComponent = render(<App />);
    });

    when('the user opens the app', () => {
      // No specific action needed, covered in 'given'
    });

    then('the user should see 32 events by default', async () => {
      const AppDom = AppComponent.container.firstChild;
      const EventListDOM = AppDom.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed.', ({ given, when, then }) => {
    let AppComponent;
    let NumberOfEventsComponent;
    let updateNumberOfEvents;

    beforeEach(() => {
      updateNumberOfEvents = jest.fn();
      NumberOfEventsComponent = render(<NumberOfEvents updateNumberOfEvents={updateNumberOfEvents} />);
    });

    given('the user is viewing the list of events with the default number set to 32', () => {
      AppComponent = render(<App />);
      // Ensure the default state is clear
    });

    when('the user updates the number of events to display to 10', async () => {
      const user = userEvent.setup();
      const textBox = NumberOfEventsComponent.getAllByRole('textbox').find(el => el.classList.contains('number-box'));
    
      // Trigger the click and type events
      await user.click(textBox);
      await user.type(textBox, '{backspace}{backspace}10{enter}');
    
      // Wait for the value to be updated
      await waitFor(() => {
        expect(textBox.value).toBe('10');
      });
    });

    then('the user should see 10 events in the updated event list', async () => {
      // Wait for the App component to re-render with the updated events
      await waitFor(() => {
        const AppDom = AppComponent.container.firstChild;
        const EventListDOM = AppDom.querySelector('#event-list');
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');

        // Ensure that the number of rendered events matches the expected count (10)
        expect(EventListItems.length).toBe(10);
      });
    });
  });
});
