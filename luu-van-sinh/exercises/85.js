/**
 * Write a JavaScript code to divide an given array of positive integers into two parts. 
 * First element goes to first part, second element goes to second part, and third element goes 
 * to first part and so on. Now compute the sum of two parts and store into an array of size two.
 */
const divideArray = (a = []) => {
    let result = [0, 0]
    for (let i = 0; i < a.length; i++) {
        if (i % 2) {
            result[1] += a[i]
        } else {
            result[0] += a[i]
        }
    }
    return result
}
// Example
console.log(divideArray([1, 2, 3, 4, 5, 6, 7]));