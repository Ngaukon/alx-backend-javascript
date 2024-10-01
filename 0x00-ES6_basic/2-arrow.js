export default function getNeighborhoodsList() {
  // Initialize the list of San Francisco neighborhoods
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Preserve the context of 'this' for use in the nested function
  const self = this;

  // Method to add a new neighborhood to the list
  this.addNeighborhood = (newNeighborhood) => {
    // Add the new neighborhood to the list
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    // Return the updated list of neighborhoods
    return self.sanFranciscoNeighborhoods;
  };
}
