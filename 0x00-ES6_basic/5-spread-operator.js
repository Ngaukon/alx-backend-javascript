export default function concatArrays(array1, array2, string) {
  // Use the spread operator to concatenate two arrays and a string into a new array
  // The string will be treated as an array of characters
  return [...array1, ...array2, ...string];
}
