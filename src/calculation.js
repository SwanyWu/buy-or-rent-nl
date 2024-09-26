export const calculateBuy = (buyData) => {
    const downPayment = parseFloat(buyData.downPayment) || 0;
    const housePrice = parseFloat(buyData.housePrice) || 0;
    const mortgageRate = (parseFloat(buyData.mortgageRate) || 0) / 100;
    const mortgageYears = parseInt(buyData.mortgageYears) || 0;
    const inflationRate = (parseFloat(buyData.inflationRate) || 0) / 100;
    const yearsOfLiving = parseInt(buyData.yearsOfLiving) || 0;
  
    const loanAmount = housePrice - downPayment;
    const monthlyRate = mortgageRate / 12;
    const numberOfPayments = mortgageYears * 12;
    const mortgagePayment = monthlyRate > 0
      ? loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
      : loanAmount / numberOfPayments;
  
    const recurringCost = mortgagePayment * 12;
    const futureHousePrice = housePrice * Math.pow(1 + inflationRate, yearsOfLiving);
  
    return {
      initialCost: downPayment,
      recurringCost: recurringCost,
      return: futureHousePrice,
      total: downPayment + recurringCost * mortgageYears,
    };
  };
  
  export const calculateRent = (rentData) => {
    const saving = parseFloat(rentData.saving) || 0;
    const rentPerYear = parseFloat(rentData.rentPerYear) || 0;
    const savingInterestRate = (parseFloat(rentData.savingInterestRate) || 0) / 100;
    const yearsOfRent = parseInt(rentData.yearsOfRent) || 0;
  
    const recurringCost = rentPerYear * yearsOfRent;
    const futureSaving = saving * Math.pow(1 + savingInterestRate, yearsOfRent);
  
    return {
      initialCost: 0,
      recurringCost: recurringCost,
      return: futureSaving,
      total: recurringCost,
    };
  };
  