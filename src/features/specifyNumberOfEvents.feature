Feature: Specify Number of Events
  Scenario: When user hasn’t specified a number, 32 events are shown by default.
    Given the Meet app is open
    When the user opens the app
    Then the user should see 32 events by default

  Scenario: User can change the number of events displayed.
    Given the user is viewing the list of events
    When the user changes the number of events to display to 10
    Then the user should see 10 events in the list
    