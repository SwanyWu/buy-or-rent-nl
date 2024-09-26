
function RentForm({ data, handleChange, years, handleYearsChange, handleCashAtHandChange }) {
  return (
    <div className="renting-section">
      <h2>If I spend it on renting</h2>
      <label>Saving: </label>
      <input 
        type="number" 
        name="Saving" 
        value={data.saving} 
        onChange={handleCashAtHandChange}
      />
      <br />
      <label>Rent per Year: </label>
      <input type="number" name="rentPerYear" value={data.rentPerYear} onChange={handleChange} />
      <br />
      <label>Saving Interest Rate: </label>
      <input type="number" name="savingInterestRate" value={data.savingInterestRate} onChange={handleChange} />
      <br />
      <label>Years of Rent: </label>
      <input type="number" value={years} onChange={handleYearsChange} />
    </div>
  );
}

export default RentForm;
