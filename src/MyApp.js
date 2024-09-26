import React, { useState } from 'react';
import './MyApp.css';

function MyApp() {
  const [buyData, setBuyData] = useState({
    housePrice: '',
    downPayment: '',
    mortgageRate: '',
    mortgageYears: '',
    propertyTaxRate: '',
    inflationRate: '',
    yearsOfLiving: '',
  });

  const [rentData, setRentData] = useState({
    saving: '',
    rentPerYear: '',
    rentIncreaseRate: '',
    savingInterestRate: '',
    yearsOfRent: ''
  });

  const [buyResult, setBuyResult] = useState(null);
  const [rentResult, setRentResult] = useState(null);

  const handleBuyInputChange = (e) => {
    const { name, value } = e.target;
    setBuyData({ ...buyData, [name]: value });
  };

  const handleRentInputChange = (e) => {
    const { name, value } = e.target;
    setRentData({ ...rentData, [name]: value });
  };

  const calculateBuy = () => {
    const downPayment = parseFloat(buyData.downPayment) || 0;
    const housePrice = parseFloat(buyData.housePrice) || 0;
    const inflationRate = (parseFloat(buyData.inflationRate) || 0) / 100;
    const yearsOfLiving = parseInt(buyData.yearsOfLiving) || 0;

    const recurringCost = (housePrice - downPayment) / (parseInt(buyData.mortgageYears) || 1);
    const futureHousePrice = housePrice * Math.pow(1 + inflationRate, yearsOfLiving);

    const result = {
      initialCost: downPayment,
      recurringCost: recurringCost,
      return: futureHousePrice,
      total: downPayment + recurringCost,
    };

    setBuyResult(result);
  };

  const calculateRent = () => {
    const saving = parseFloat(rentData.saving) || 0;
    const rentPerYear = parseFloat(rentData.rentPerYear) || 0;
    const savingInterestRate = (parseFloat(rentData.savingInterestRate) || 0) / 100;
    const yearsOfRent = parseInt(rentData.yearsOfRent) || 0;

    const recurringCost = rentPerYear * yearsOfRent;
    const futureSaving = saving * Math.pow(1 + savingInterestRate, yearsOfRent);

    const result = {
      initialCost: 0,
      recurringCost: recurringCost,
      return: futureSaving,
      total: recurringCost,
    };

    setRentResult(result);
  };

  return (
    <div>
      <h1>Buy or Rent Calculator</h1>
      <div>
        <h2>Buying Inputs</h2>
        <label>House Price: </label>
        <input type="number" name="housePrice" value={buyData.housePrice} onChange={handleBuyInputChange} />
        <br />
        <label>Down Payment: </label>
        <input type="number" name="downPayment" value={buyData.downPayment} onChange={handleBuyInputChange} />
        <br />
        <label>Mortgage Interest Rate: </label>
        <input type="number" name="mortgageRate" value={buyData.mortgageRate} onChange={handleBuyInputChange} />
        <br />
        <label>Mortgage Years: </label>
        <input type="number" name="mortgageYears" value={buyData.mortgageYears} onChange={handleBuyInputChange} />
        <br />
        <label>Years of Living: </label>
        <input type="number" name="yearsOfLiving" value={buyData.yearsOfLiving} onChange={handleBuyInputChange} />
        <br />
        <label>Inflation Rate: </label>
        <input type="number" name="inflationRate" value={buyData.inflationRate} onChange={handleBuyInputChange} />
      </div>

      <div>
        <h2>Renting Inputs</h2>
        <label>Saving: </label>
        <input type="number" name="saving" value={rentData.saving} onChange={handleRentInputChange} />
        <br />
        <label>Rent per Year: </label>
        <input type="number" name="rentPerYear" value={rentData.rentPerYear} onChange={handleRentInputChange} />
        <br />
        <label>Saving Interest Rate: </label>
        <input type="number" name="savingInterestRate" value={rentData.savingInterestRate} onChange={handleRentInputChange} />
        <br />
        <label>Years of Rent: </label>
        <input type="number" name="yearsOfRent" value={rentData.yearsOfRent} onChange={handleRentInputChange} />
      </div>

      <button onClick={calculateBuy}>Calculate Buy</button>
      <button onClick={calculateRent}>Calculate Rent</button>

      {buyResult && rentResult && (
        <div>
          <h2>Results</h2>
          <table border="1">
            <thead>
              <tr>
                <th> </th>
                <th>Buying</th>
                <th>Renting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Initial Cost</td>
                <td>{buyResult.initialCost}</td>
                <td>{rentResult.initialCost}</td>
              </tr>
              <tr>
                <td>Recurring Cost</td>
                <td>{buyResult.recurringCost}</td>
                <td>{rentResult.recurringCost}</td>
              </tr>
              <tr>
                <td>Return</td>
                <td>{buyResult.return}</td>
                <td>{rentResult.return}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{buyResult.total}</td>
                <td>{rentResult.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyApp;
