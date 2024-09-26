export const calculateBuy = (buyData, years) => {
    const cashAtHand = parseFloat(buyData.downPayment) || 0; // Use downPayment as cashAtHand
    const housePrice = parseFloat(buyData.housePrice) || 0;
    const inflationRate = (parseFloat(buyData.inflationRate) || 0) / 100;
    const yearsOfLiving = parseInt(years) || 0;

    const recurringCost = ((housePrice - cashAtHand) / (parseInt(buyData.mortgageYears) || 1)).toFixed(2);
    const futureHousePrice = (housePrice * Math.pow(1 + inflationRate, yearsOfLiving)).toFixed(2);

    const result = {
        initialCost: cashAtHand.toFixed(2),
        recurringCost: recurringCost,
        return: futureHousePrice,
        total: (parseFloat(cashAtHand) + parseFloat(recurringCost)).toFixed(2),
    };

    return result;
};


  
export const calculateRent = (rentData, years) => {
    const saving = parseFloat(rentData.saving) || 0; // This should be synced with cash at hand
    const rentPerYear = parseFloat(rentData.rentPerYear) || 0;
    const savingInterestRate = (parseFloat(rentData.savingInterestRate) || 0) / 100;
    const yearsOfRent = parseInt(years) || 0;

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


  