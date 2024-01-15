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
    let setCurrentNOE;

    beforeEach(() => {
      setCurrentNOE = jest.fn();
      NumberOfEventsComponent = render(<NumberOfEvents  setCurrentNOE={setCurrentNOE} />);
    });

    given('the user is viewing the list of events with the default number set to 32', () => {
      AppComponent = render(<App />);
      // Ensure the default state is clear
    });

    when('the user updates the number of events to display', async () => {
      const user = userEvent.setup();
      const textBox = NumberOfEventsComponent.getAllByRole('textbox').find(el => el.classList.contains('number-box-input'));
      await user.click(textBox);
      await user.type(textBox, '{backspace}{backspace}10{enter}');
      expect(textBox.value).toBe('10');
    });
    
    then('the user should see the specified number of events in the updated event list', async () => {
      // Wait for the updated event list
      await waitFor(() => {
        const AppDom = AppComponent.container.firstChild;
        const EventListDOM = AppDom.querySelector('#event-list');
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems).toBeInTheDocument;
      });
    });
    });
  });