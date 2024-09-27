export const calculateBuy = (buyData, years) => {
    // expense: mortgage leftover
    const downPayment = parseFloat(buyData.downPayment) || 0;
    const housePrice = parseFloat(buyData.housePrice) || 0;
    const mortgageRate = (parseFloat(buyData.mortgageRate) || 0) / 100;
    const mortgageYears = parseFloat(buyData.mortgageYears) || 0;
    const yearsOfLiving = parseInt(years) || 0;
    // Loan principal: House price minus down payment
    const loanAmount = housePrice - downPayment;
    const monthlyRate = mortgageRate / 12;
    const totalPayments = mortgageYears * 12;
    const paymentsMade = yearsOfLiving * 12;
    // Remaining mortgage balance (loan balance) after `paymentsMade` payments
    const mortgageLeftover = loanAmount * ((Math.pow(1 + monthlyRate, totalPayments) - Math.pow(1 + monthlyRate, paymentsMade)) / (Math.pow(1 + monthlyRate, totalPayments) - 1));
    
    // return
    const inflationRate = (parseFloat(buyData.inflationRate) || 0) / 100;
    const futureHousePrice = (housePrice * Math.pow(1 + inflationRate, yearsOfLiving)).toFixed(2);

    // tax deduction
    const wozValue = parseFloat(buyData.wozValue) || 0;
    const annualInterest = mortgageRate * loanAmount;
    const propertyTaxRate = 0.45/100;
    const propertyAnnualTax = wozValue * propertyTaxRate;
    const deductableIncome = annualInterest - propertyAnnualTax;
    const taxReturn = deductableIncome * 0.369 * yearsOfLiving;

    const result = {
        initialCost: downPayment.toFixed(2),
        mortgageLeftover: mortgageLeftover.toFixed(2),
        futureHousePrice: futureHousePrice,
        taxReturn: taxReturn.toFixed(2),
        total: (futureHousePrice - mortgageLeftover - downPayment).toFixed(2),
    };

    return result;
};


  
export const calculateRent = (rentData, years) => {
    const saving = parseFloat(rentData.saving) || 0; // This should be synced with cash at hand
    const rentPerYear = parseFloat(rentData.rentPerYear) || 0;
    const savingInterestRate = (parseFloat(rentData.savingInterestRate) || 0) / 100;
    const yearsOfRent = parseInt(years) || 0;

    const totalRent = (rentPerYear * yearsOfRent).toFixed(2);
    const futureSaving = (saving * Math.pow(1 + savingInterestRate, yearsOfRent)).toFixed(2);
    
    const total = futureSaving - totalRent;

    const result = {
        totalRent: totalRent,
        futureSaving: futureSaving,
        total: total.toFixed(2)
    };

    return result;
};


  