import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setCurrentNOE(value);
    } else {
      // If the value is not a positive integer, set it to an empty string
      setCurrentNOE(32);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="numberOfEvents">Number of Events:</label>
      <input
      className='number-box-input'
        type="number"
        id="numberBoxInput"
        defaultValue={32}
        onChange={handleInputChange}
        role='textbox'
        data-testid="number-of-events-input"
      />
    </div>
  );
};

export default NumberOfEvents;
