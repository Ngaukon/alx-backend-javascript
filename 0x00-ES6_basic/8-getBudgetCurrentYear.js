function getCurrentYear() {
  const date = new Date(); // Create a new Date object representing the current date and time
  return date.getFullYear(); // Return the current year as a four-digit number
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Create a budget object with properties named based on the current year
  const budget = {
    [`income-${getCurrentYear()}`]: income, // Property for income with the current year as part of the key
    [`gdp-${getCurrentYear()}`]: gdp,       // Property for GDP with the current year as part of the key
    [`capita-${getCurrentYear()}`]: capita, // Property for GDP per capita with the current year as part of the key
  };

  // Return the constructed budget object with current year keys
  return budget;
}
