import { useState } from 'react';
import BuyForm from './BuyForm';
import RentForm from './RentForm';
import ResultsTable from './ResultsTable';
import './MyApp.css';
import Footer from './Footer';
import './Footer.css'; 
import { calculateBuy, calculateRent } from './calculation';

function MyApp() {
  // buy input
  const [buyData, setBuyData] = useState({
    housePrice: '',
    downPayment: '',
    mortgageRate: '',
    mortgageYears: '',
    propertyTaxRate: '',
    inflationRate: '',
  });
  const handleBuyInputChange = (e) => {
    const { name, value } = e.target;
    setBuyData({ ...buyData, [name]: value });
  };

  // rent input
  const [rentData, setRentData] = useState({
    saving: '',
    rentPerYear: '',
    rentIncreaseRate: '',
    savingInterestRate: '',
  });
  const handleRentInputChange = (e) => {
    const { name, value } = e.target;
    setRentData({ ...rentData, [name]: value });
  };

  // shared input: years of living/renting
  const [years, setYears] = useState('');
  const handleYearsChange = (e) => {
    const value = e.target.value;
    setYears(value);
  };

  // calculation
  const [buyResult, setBuyResult] = useState(null);
  const [rentResult, setRentResult] = useState(null);
  const handleCalculate = () => {
    const buyCalculationResult = calculateBuy(buyData, years);
    const rentCalculationResult = calculateRent(rentData, years);
    setBuyResult(buyCalculationResult);
    setRentResult(rentCalculationResult);
  };

  return (
    <div className="app-wrapper">
      <div className="content">
        <h1>Buy or Rent Calculator (NL)</h1>
  
        {/* Dynamic display of cash at hand and years */}
        <div className="init-text">
          <span>I have €</span>
          <input 
            type="number" 
            value={buyData.downPayment || rentData.saving} 
            onChange={(e) => {
              const value = e.target.value;
              setBuyData({ ...buyData, downPayment: value });
              setRentData({ ...rentData, saving: value });
            }} 
            style={{ width: '190px', margin: '0 5px' }} 
            placeholder="enter your dispensable cash"
          />
          <span> at the moment, in the next </span>
          <input 
            type="number" 
            value={years} 
            onChange={handleYearsChange} 
            style={{ width: '30px', margin: '0 5px' }} 
          />
          <span> years...</span>
        </div>
  
        {/* Forms */}
        <div className="input-container">
          <div className="form-container">
            <BuyForm data={buyData} handleChange={handleBuyInputChange} years={years}/>
          </div>
          <div className="form-container">
            <RentForm data={rentData} handleChange={handleRentInputChange} years={years}/>
          </div>
        </div>
        
        {/* Button */}
        <div className="button-container">
          <button onClick={handleCalculate} style={{ marginTop: '20px' }}>Calculate</button>
        </div>
  
        {/* Show results table if calculated, otherwise show empty table */}
        {buyResult && rentResult ? (
          <ResultsTable buyResult={buyResult} rentResult={rentResult} />
        ) : (
          <ResultsTable buyResult={{}} rentResult={{}} />
        )}
      </div>
  
        {/* Footer */}
        <Footer />
    </div>
  );
  
}

export default MyApp;
