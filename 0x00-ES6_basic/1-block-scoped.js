export default function taskBlock(trueOrFalse) {
  const task = false;  // Outer variable task initialized to false
  const task2 = true;  // Outer variable task2 initialized to true

  if (trueOrFalse) {
    const task = true; // Inner task variable scoped to the if block
    const task2 = false; // Inner task2 variable scoped to the if block
    // ESLint disables the unused variable warning for inner scope
  }

  return [task, task2]; // Returns the outer variables, unaffected by the inner scope
}
