import React, { useState } from 'react';

const NumberOfEvents = ({ updateNumberOfEvents }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleInputChange = (e) => {
    // Ensure the value is a positive integer
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setNumberOfEvents(value);
      updateNumberOfEvents(value, e);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="numberOfEvents">Number of Events:</label>
      <input
      className='number-box-input'
        type="number"
        id="numberBoxInput"
        value={numberOfEvents}
        onChange={handleInputChange}
        role='textbox'
        data-testid="number-of-events-input"
      />
    </div>
  );
};

export default NumberOfEvents;
