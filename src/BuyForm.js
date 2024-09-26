
function BuyForm({ data, handleChange, years, handleYearsChange, handleCashAtHandChange }) {
  return (
    <div className="buying-section">
      <h2>If I spend it on buying</h2>
      <label>House Price: </label>
      <input type="number" name="housePrice" value={data.housePrice} onChange={handleChange} />
      <br />
      <label>Down Payment: </label>
      <input 
        type="number" 
        name="downPayment" 
        value={data.downPayment} 
        onChange={handleCashAtHandChange} // Sync with the cash at hand state
      />
      <br />
      <label>Mortgage Interest Rate: </label>
      <input type="number" name="mortgageRate" value={data.mortgageRate} onChange={handleChange} />
      <br />
      <label>Mortgage Years: </label>
      <input type="number" name="mortgageYears" value={data.mortgageYears} onChange={handleChange} />
      <br />
      <label>Years of Living: </label>
      <input type="number" value={years} onChange={handleYearsChange} />
      <br />
      <label>Inflation Rate: </label>
      <input type="number" name="inflationRate" value={data.inflationRate} onChange={handleChange} />
    </div>
  );
}

export default BuyForm;
