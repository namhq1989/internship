/**
 * Write a JavaScript program to check if the last digit of the three given positive 
 * integers is same.
 */
function lastDigitIsSame(a = 0, b = 0, c = 0) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false
    }
    return (a % 10 === b % 10 && a % 10 === c % 10)
}
// Example
console.log(lastDigitIsSame(11, 10, 21))
console.log(lastDigitIsSame(11, 1, 21))