import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('Events are collapsed by default', ({ given, when, then }) => {
    given('the Meet app is open', () => {

    });

    when('the user views the list of events', () => {

    });

    then('each event should be collapsed by default.', () => {

    });
});

test('Expand event details', ({ given, when, then }) => {
  given('the user is viewing the details of an event', () => {

  });

  when('the user clicks on an event', () => {

  });

  then('the event details should be expanded.', () => {

  });
});

test('Collapse event details', ({ given, when, then }) => {
  given('the user is viewing the details of an event', () => {

  });

  when('the user clicks to collapse the event details', () => {

  });

  then('the event details should be hidden.', () => {

  });
});

});
