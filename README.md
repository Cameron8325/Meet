# Meet App

## Project Overview

The Meet app is a serverless, progressive web application (PWA) built with React, following a test-driven development (TDD) approach. It leverages the Google Calendar API to fetch upcoming events and provides users with a seamless experience, combining the benefits of serverless architecture and PWAs.

## Key Features

### 1. Filter Events by City

- As a user,
- I should be able to filter events by city,
- So that I can find and attend events in a specific location.

### 2. Show/Hide Event Details

- As a user,
- I should be able to see event elements collapsed by default,
- So that I can have a concise overview of the events.

- As a user,
- I should be able to expand an event to see details,
- So that I can access more information about a specific event.

- As a user,
- I should be able to collapse an event to hide details,
- So that I can focus on high-level event information and reduce clutter.

#### Scenarios

1. Event element is collapsed by default
   - Given the user is on the events page
   - When they view the list of events
   - Then the event element should be collapsed by default

2. User can expand an event to see details
   - Given the user is on the events page
   - When they click on a specific event
   - Then the details of that event should be visible

3. User can collapse an event to hide details
   - Given the user is viewing the details of an expanded event
   - When they choose to collapse the event
   - Then the event details should be hidden

### 3. Specify Number of Events

- As a user,
- I should see 32 events displayed by default when I haven't specified a number,
- So that I have a reasonable default view of events.

- As a user,
- I should be able to change the number of events displayed,
- So that I can customize the app to show the desired amount of information.

#### Scenarios

1. 32 events are shown by default when the user hasn’t specified a number
   - Given the user is on the events page
   - When they haven't specified the number of events to display
   - Then 32 events should be shown by default

2. User can change the number of events displayed
   - Given the user is on the events page
   - When they specify a different number of events to display
   - Then the app should show the specified number of events

### 4. Use the App When Offline

- As a user,
- I should see cached data when there’s no internet connection,
- So that I can still access previously viewed information even without an internet connection.

- As a user,
- I should see an error message when I change search settings (city, number of events) without internet connection,
- So that I am aware that the changes cannot be applied due to the lack of internet connectivity.

#### Scenarios

1. Show cached data when there’s no internet connection
   - Given the user has previously accessed the events page with an internet connection
   - When the user goes offline
   - Then the app should display the previously cached data

2. Show error when user changes search settings (city, number of events) without internet connection
   - Given the user is on the events page with no internet connection
   - When the user attempts to change search settings (city, number of events)
   - Then the app should show an error message indicating the lack of internet connectivity

### 5. Add an App Shortcut to the Home Screen

- As a user,
- I should be able to install the meet app as a shortcut on my device home screen,
- So that I can quickly access the app without navigating through other menus.

#### Scenarios

1. User can install the meet app as a shortcut on their device home screen
   - Given the user is on the app's homepage
   - When they choose to install the app shortcut
   - Then a shortcut to the app should be added to the device home screen

### 6. Display Charts Visualizing Event Details

- As a user,
- I should see a chart with the number of upcoming events in each city,
- So that I can visually understand the distribution of events across different locations.

#### Scenarios

1. Show a chart with the number of upcoming events in each city
   - Given the user is on the events page
   - When they view the chart section
   - Then a chart should be displayed showing the number of upcoming events in each city
