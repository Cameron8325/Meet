import React from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (isNaN(value)) {
      setErrorAlert('Value must be a number.');
    } else if (value > 50) {
      setErrorAlert('The maximum value is 50');
    } else if (value <= 0) {
      setErrorAlert('Value must be atleast 1');
    } else {
      setErrorAlert('');
      setCurrentNOE(value);
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
