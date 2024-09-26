// import React from 'react';

function RentForm({ data, handleChange }) {
  return (
    <div className="renting-section">
      <h2>Renting Inputs</h2>
      <label>Saving: </label>
      <input type="number" name="saving" value={data.saving} onChange={handleChange} />
      <br />
      <label>Rent per Year: </label>
      <input type="number" name="rentPerYear" value={data.rentPerYear} onChange={handleChange} />
      <br />
      <label>Saving Interest Rate: </label>
      <input type="number" name="savingInterestRate" value={data.savingInterestRate} onChange={handleChange} />
      <br />
      <label>Years of Rent: </label>
      <input type="number" name="yearsOfRent" value={data.yearsOfRent} onChange={handleChange} />
    </div>
  );
}

export default RentForm;
