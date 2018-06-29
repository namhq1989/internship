/**
 * Write a JavaScript program to check if a number in the range 40..10000 inclusive presents 
 * in two number (in same range).
 */
const isInRange = (number = 0) => {
    return (number >= 40 && number <= 10000)
}
// Example 
console.log(isInRange(100));