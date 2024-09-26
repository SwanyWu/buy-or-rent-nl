import React from 'react';

function ButtonGroup({ handleCalculateBuy, handleCalculateRent }) {
  return (
    <div className="button-container">
      <button onClick={handleCalculateBuy}>Calculate Buy</button>
      <button onClick={handleCalculateRent}>Calculate Rent</button>
    </div>
  );
}

export default ButtonGroup;
