export default function getSanFranciscoDescription() {
  const year = 2017; // Year of the economic data being referenced
  const budget = {
    income: '$119,868', // Median income for the county
    gdp: '$154.2 billion', // Gross Domestic Product of San Francisco
    capita: '$178,479', // GDP per capita for San Francisco
  };

  // Return a formatted string describing San Francisco's economic status as of 2017
  return `As of ${year}, it was the seventh-highest income county in the United States\
, with a per capita personal income of ${budget.income}. As of 2015, San Francisco \
proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
