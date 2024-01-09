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
      // Nothing specific needs to be done here, as it's covered in the 'given' step
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

    beforeEach(() => {
      NumberOfEventsComponent = render(<NumberOfEvents />);
    });

    given('the user is viewing the list of events', () => {
      AppComponent = render(<App />);
    });

    when('the user changes the number of events to display to 10', async () => {
      const user = userEvent.setup();
      const textBox = NumberOfEventsComponent.getAllByRole('textbox').find(el => el.classList.contains('number-box'));
      await user.click(textBox);
      await user.type(textBox, '{backspace}{backspace}10');
    });

    then('the user should see 10 events in the list', async () => {
      const AppDom = AppComponent.container.firstChild;
      const EventListDOM = AppDom.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(10);
      });
    });

  });
});
