# Meet App

## Project Overview

The Meet app is a serverless, progressive web application (PWA) built with React, following a test-driven development (TDD) approach. It leverages the Google Calendar API to fetch upcoming events and provides users with a seamless experience, combining the benefits of serverless architecture and PWAs.

## Key Features

1. **Filter Events by City**
   - As a user,
   - I should be able to filter events by city,
   - So that I can find and attend events in a specific location.

2. **Show/Hide Event Details**
   - As a user,
   - I should be able to see event elements collapsed by default,
   - So that I can have a concise overview of the events.
   - As a user,
   - I should be able to expand an event to see details,
   - So that I can access more information about a specific event.
   - As a user,
   - I should be able to collapse an event to hide details,
   - So that I can focus on high-level event information and reduce clutter.

3. **Specify Number of Events**
   - As a user,
   - I should see 32 events displayed by default when I haven't specified a number,
   - So that I have a reasonable default view of events.
   - As a user,
   - I should be able to change the number of events displayed,
   - So that I can customize the app to show the desired amount of information.

4. **Use the App When Offline**
   - As a user,
   - I should see cached data when there’s no internet connection,
   - So that I can still access previously viewed information even without an internet connection.
   - As a user,
   - I should see an error message when I change search settings (city, number of events) without internet connection,
   - So that I am aware that the changes cannot be applied due to the lack of internet connectivity.

5. **Add an App Shortcut to the Home Screen**
   - As a user,
   - I should be able to install the meet app as a shortcut on my device home screen,
   - So that I can quickly access the app without navigating through other menus.

6. **Display Charts Visualizing Event Details**
   - As a user,
   - I should see a chart with the number of upcoming events in each city,
   - So that I can visually understand the distribution of events across different locations.
