import getBudgetObject from './7-getBudgetObject'; // Import the function to create a basic budget object

export default function getFullBudgetObject(income, gdp, capita) {
  // Create a basic budget object using the provided income, gdp, and capita
  const budget = getBudgetObject(income, gdp, capita);
  
  // Extend the budget object with additional methods for income formatting
  const fullBudget = {
    ...budget, // Spread the properties of the basic budget object into fullBudget
    // Method to return income formatted as a dollar string
    getIncomeInDollars(income) {
      return `$${income}`; // Return income prefixed with a dollar sign
    },
    // Method to return income formatted as a euro string
    getIncomeInEuros(income) {
      return `${income} euros`; // Return income suffixed with ' euros'
    },
  };

  // Return the extended budget object with additional formatting methods
  return fullBudget;
}
