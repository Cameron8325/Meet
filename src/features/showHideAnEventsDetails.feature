Feature: Show/Hide Event Details

  Scenario: Events are collapsed by default
    Given the Meet app is open
    When the user views the list of events
    Then each event should be collapsed by default.

  Scenario: Expand event details
    Given the user is viewing the details of an event
    When the user clicks on an event
    Then the event details should be expanded.

  Scenario: Collapse event details
    Given the user is viewing the details of an event
    When the user clicks to collapse the event details
    Then the event details should be hidden.