Feature: Specify Number of Events
  Scenario: When user hasn’t specified a number, 32 events are shown by default.
    Given the Meet app is open
    When the user opens the app
    Then the user should see 32 events by default

  Scenario: User can change the number of events displayed.
    Given the user is viewing the list of events with the default number set to 32
    When the user updates the number of events to display
    Then the user should see the specified number of events in the updated event list