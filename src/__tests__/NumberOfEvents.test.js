import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents.js';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test('renders textbox element', () => {
    const textBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(textBox).toBeInTheDocument();
  });

  test('default value of input field is 32', () => {
    const textBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(textBox.value).toBe('32');
  });

  test('changes in input field are reflected in state', async () => {
    const user = userEvent.setup();
    const textBox = NumberOfEventsComponent.queryByRole('textbox');
    await user.click(textBox);
    await user.type(textBox, '{backspace}{backspace}10');
    await waitFor(() => {
      expect(textBox.value).toBe('10');
    });
  });



});
