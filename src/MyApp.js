import { useState } from 'react';
import BuyForm from './BuyForm';
import RentForm from './RentForm';
import ResultsTable from './ResultsTable';
import './MyApp.css';
import { calculateBuy, calculateRent } from './calculation';

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

  const handleCalculateBuy = () => {
    const result = calculateBuy(buyData);
    setBuyResult(result);
  };

  const handleCalculateRent = () => {
    const result = calculateRent(rentData);
    setRentResult(result);
  };

  return (
    <div>
      <h1>Buy or Rent Calculator</h1>
      <div className="input-container">
        <div className="form-container">
          <BuyForm data={buyData} handleChange={handleBuyInputChange} />
        </div>
        <div className="form-container">
          <RentForm data={rentData} handleChange={handleRentInputChange} />
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleCalculateBuy}>Calculate Buy</button>
        <button onClick={handleCalculateRent}>Calculate Rent</button>
      </div>

      {buyResult && rentResult && (
        <ResultsTable buyResult={buyResult} rentResult={rentResult} />
      )}
    </div>
  );
}

export default MyApp;
