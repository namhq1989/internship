/**
 * Write a JavaScript program to divide two positive numbers and return a string with 
 * properly formatted commas.
 */
const divide = (a=0, b=0) => {
    return (a/b).toLocaleString()
}
// Example
console.log(divide(1546300,12));
