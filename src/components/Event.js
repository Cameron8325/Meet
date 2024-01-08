import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <div>
        <h2>{event.summary}</h2>
        <p>{event.start.dateTime}</p>
        <p>{event.location}</p>
        {showDetails && <p>{event.description}</p>}
        <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </li>
  );
};

export default Event;