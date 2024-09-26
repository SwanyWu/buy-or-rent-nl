export const calculateBuy = (buyData) => {
    const downPayment = parseFloat(buyData.downPayment) || 0;
    const housePrice = parseFloat(buyData.housePrice) || 0;
    const inflationRate = (parseFloat(buyData.inflationRate) || 0) / 100;
    const yearsOfLiving = parseInt(buyData.yearsOfLiving) || 0;
  
    const recurringCost = ((housePrice - downPayment) / (parseInt(buyData.mortgageYears) || 1)).toFixed(2);
    const futureHousePrice = (housePrice * Math.pow(1 + inflationRate, yearsOfLiving)).toFixed(2);
  
    const result = {
      initialCost: downPayment.toFixed(2),
      recurringCost: recurringCost,
      return: futureHousePrice,
      total: (parseFloat(downPayment) + parseFloat(recurringCost)).toFixed(2),
    };
  
    return result;
  };
  
export const calculateRent = (rentData) => {
    const saving = parseFloat(rentData.saving) || 0;
    const rentPerYear = parseFloat(rentData.rentPerYear) || 0;
    const savingInterestRate = (parseFloat(rentData.savingInterestRate) || 0) / 100;
    const yearsOfRent = parseInt(rentData.yearsOfRent) || 0;
  
    const recurringCost = (rentPerYear * yearsOfRent).toFixed(2);
    const futureSaving = (saving * Math.pow(1 + savingInterestRate, yearsOfRent)).toFixed(2);
  
    const result = {
      initialCost: '0.00',
      recurringCost: recurringCost,
      return: futureSaving,
      total: recurringCost,
    };
  
    return result;
  };
  