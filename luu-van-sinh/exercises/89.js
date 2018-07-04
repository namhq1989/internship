/**
 * Write a JavaScript program to check whether it is possible to replace $ in a given 
 * expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
 */
const checkExpression = (a = 0, b = 0, c = 1) => {
    return (a + b === c || a - b === c || a * b === c || a / b === c)
}
// Example
console.log(checkExpression(1, 2, 3));
console.log(checkExpression(4, 2, 8));