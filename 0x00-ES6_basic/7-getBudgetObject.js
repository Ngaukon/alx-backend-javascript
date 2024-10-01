export default function getBudgetObject(income, gdp, capita) {
  // Create a budget object using the provided income, gdp, and capita parameters
  const budget = {
    income, // The income value
    gdp,    // The GDP value
    capita, // The GDP per capita value
  };

  // Return the constructed budget object
  return budget;
}
