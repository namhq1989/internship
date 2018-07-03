/**
 * Write a JavaScript program to test if a given array of integers contains 30 and 
 * 40 twice. The array length should be 0, 1, or 2. 
 */
const checkArray = (a = []) => {
    if (a.length > 2) {
        return false
    }
    let count30 = count40 = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 30) {
            count30++
        } else if (a[i] === 40) {
            count40++
        }
    }
    return count30 === 2 || count40 === 2
}
// Example
console.log(checkArray([30, 40]));
console.log(checkArray([30, 30]));