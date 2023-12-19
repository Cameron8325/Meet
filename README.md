# Meet App

## Objective

Build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application utilizes the Google Calendar API to fetch upcoming events.

## Context

Serverless and PWAs have grown in popularity, providing benefits such as no backend maintenance, easy scalability, always availability, no cost for idle time, instant loading, offline support, push notifications, "add to home screen" prompt, responsive design, and cross-platform compatibility. The TDD approach ensures a focus on requirements and high-quality code.

## The 5 Ws

1. **Who** - Users of the Meet app, including individuals, friends, professional networks, and potential employers.
2. **What** - A progressive web app with offline capabilities and a serverless backend developed using TDD.
3. **When** - Users can access the app anytime to view upcoming events for a specific city, and recruiters can immediately review code on GitHub.
4. **Where** - The server is serverless, hosted on a cloud provider (e.g., AWS), and the app is online, installable, and usable offline with responsiveness across devices.
5. **Why** - Combining serverless, PWA, and TDD skills distinguishes the app, offering cloud infrastructure benefits, an excellent user experience, performance, quality code, and adequate test coverage. Data visualization enhances the app's appeal and insights.

---

### User Stories:

#### Feature 2: Show/Hide Event Details
- As a user,
  - I should be able to collapse an event by default,
  - So that I can have a clean and concise view of upcoming events.

- As a user,
  - I should be able to expand an event to see details,
  - So that I can get more information about a specific event.

- As a user,
  - I should be able to collapse an expanded event,
  - So that I can hide the details and focus on other events.

#### Feature 3: Specify Number of Events
- As a user,
  - I should see 32 events by default when I haven't specified a number,
  - So that I can quickly view a reasonable number of events.

- As a user,
  - I should be able to change the number of events displayed,
  - So that I can customize the view based on my preference.

#### Feature 4: Use the App When Offline
- As a user,
  - I should see cached data when there's no internet connection,
  - So that I can still access information even without an internet connection.

- As a user,
  - I should see an error when changing search settings (city, number of events) offline,
  - So that I am aware that my changes cannot be applied without an internet connection.

#### Feature 5: Add an App Shortcut to the Home Screen
- As a user,
  - I should be able to install the Meet app as a shortcut on my device home screen,
  - So that I can quickly access the app without going through the browser.

#### Feature 6: Display Charts Visualizing Event Details
- As a user,
  - I should see a chart with the number of upcoming events in each city,
  - So that I can easily understand the distribution of events across different cities.

### Gherkin Syntax:

#### Feature 2: Show/Hide Event Details
```gherkin
Given the Meet app is open,
When I view the list of events,
Then each event should be collapsed by default.

Given I am viewing the details of an event,
When I click on an event,
Then the event details should be expanded.

Given I am viewing the details of an event,
When I click to collapse the event details,
Then the event details should be hidden.
```

### Feature 3: Specify Number of Events
```gherkin
Given the Meet app is open,
When I haven't specified the number of events to display,
Then I should see 32 events by default.

Given I am viewing the list of events,
When I change the number of events to display to 10,
Then I should see 10 events in the list.
```

### Feature 4: Use the App When Offline
```gherkin
Given I have opened the Meet app with an internet connection,
When I go offline,
Then the app should show cached data.

Given I am offline,
When I try to change the search settings (city, number of events),
Then I should see an error indicating the need for an internet connection.
```

### Feature 5: Add an App Shortcut to the Home Screen
```gherkin
Given I have the Meet app open on my device,
When I choose to install the app shortcut,
Then the app should be added to my device's home screen.
```

### Feature 6: Display Charts Visualizing Event Details
```gherkin
Given the Meet app is open,
When I view the charts section,
Then I should see a chart displaying the number of upcoming events in each city.
```

## Serverless Integration

The Meet app utilizes serverless technology, powered by AWS Lambda, to handle backend tasks efficiently. This approach ensures seamless scalability based on user demand, cost-effectiveness by paying only for actual usage, simplified development without server management hassles, and real-time data updates for a responsive user experience.

