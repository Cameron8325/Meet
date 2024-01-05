import React, { useState } from 'react';

const NumberOfEvents = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleInputChange = (e) => {
    // Ensure the value is a positive integer
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setNumberOfEvents(value);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="numberOfEvents">Number of Events:</label>
      <input
        type="number"
        id="numberBox"
        value={numberOfEvents}
        onChange={handleInputChange}
        role='textbox'
      />
    </div>
  );
};

export default NumberOfEvents;
