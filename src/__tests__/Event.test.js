import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let eventComponent;
  let mockEvent;

  beforeAll(async () => {
    const allEvents = await getEvents();
    mockEvent = allEvents[0];
  });

  beforeEach(() => {
    eventComponent = render(<Event event={mockEvent} />);
  });

  test("renders a button", () => {
    const detailsButton = eventComponent.queryByRole("button");
    expect(detailsButton).toBeInTheDocument();
    expect(detailsButton).toHaveClass('details-btn');
    expect(eventComponent.queryByRole("button")).toHaveTextContent("Show Details");
  });

  test("renders event title, start time, location, and show details button", () => {
    expect(eventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
    expect(eventComponent.queryByText(mockEvent.start.dateTime)).toBeInTheDocument();
    expect(eventComponent.queryByText(mockEvent.location)).toBeInTheDocument();
  });

  test("By default, event's details section should be hidden", () => {
    expect(eventComponent.queryByText(mockEvent.description)).not.toBeInTheDocument();
  });

  test("Shows the details section when the user clicks on Show Details button", async () => {
    const user = userEvent.setup();
    // Initially, details section should be hidden
    expect(eventComponent.queryByText(mockEvent.description)).not.toBeInTheDocument();
    await user.click(eventComponent.queryByRole("button"));
    expect(eventComponent.queryByText(mockEvent.description)).toBeInTheDocument;
    expect(eventComponent.queryByRole("button")).toHaveTextContent("Hide Details");

  });

  test("Hides the details section when the user clicks on Hide Details button", async () => {
    const user = userEvent.setup();
    await user.click(eventComponent.getByText("Show Details"));
    expect(eventComponent.queryByRole("button")).toHaveTextContent("Hide Details");
    await user.click(eventComponent.getByText("Hide Details"));
    expect(eventComponent.queryByRole("button")).toHaveTextContent("Show Details");
    expect(eventComponent.queryByText(mockEvent.description)).not.toBeInTheDocument();
  });
});
