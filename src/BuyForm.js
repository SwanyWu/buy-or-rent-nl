import { useState } from 'react';

function BuyForm({ data, handleChange, years, handleYearsChange, handleCashAtHandChange }) {
    const [showWozInfoPopup, setShowWozInfoPopup] = useState(false);
    const [showInterestRateInfoPopup, setShowInterestRateInfoPopup] = useState(false);

    // Function to show the pop-up
    // const handleMouseEnter = () => {
    //     setShowInfoPopup(true);
    // };

    // // Function to hide the pop-up
    // const handleMouseLeave = () => {
    //     setShowInfoPopup(false);
    // };

  return (
    <div className="buying-section">
      <h2>If I spend it on buying</h2>
      <label>House Price: </label>
      <input type="number" name="housePrice" value={data.housePrice} onChange={handleChange} />
      <br />
      <label>WOZ Value: </label>
      <input type="number" name="wozValue" value={data.wozValue} onChange={handleChange} />
      <span className="info-icon" 
        onMouseEnter={() => setShowWozInfoPopup(true)} 
        onMouseLeave={() => setShowWozInfoPopup(false)}
        style={{ marginLeft: '5px', cursor: 'pointer' }}
      >ℹ️</span>
      {showWozInfoPopup && (
          <div className="info-popup">
            This is to calculate your mortgage interest return. Note that deduction rate is 36.93% for 2023 
          </div>
        )}
      <br />
      <label>Down Payment: </label>
      <input 
        type="number" 
        name="downPayment" 
        value={data.downPayment} 
        onChange={handleCashAtHandChange}
      />
      <br />
      <label>Mortgage Interest Rate: </label>
      <input type="number" name="mortgageRate" value={data.mortgageRate} onChange={handleChange} />
      <span className="info-icon" 
          onMouseEnter={() => setShowInterestRateInfoPopup(true)} 
          onMouseLeave={() => setShowInterestRateInfoPopup(false)}
        style={{ marginLeft: '5px', cursor: 'pointer' }}
      >ℹ️</span>
      {showInterestRateInfoPopup && (
          <div className="info-popup">
            Enter 4 if your interest rate is 4% 
          </div>
        )}
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
