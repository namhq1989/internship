/**
 * Write a JavaScript program to check three given numbers, if the three numbers are same 
 * return 30 otherwise return 40 and if two numbers are same return 20. 
 */
const checkNumber = (a = 0, b = 1, c = 2) => {
    if (a === b && a === c) {
        return 30
    }
    return (a === b || a === c || b === c) ? 20 : 40
}
// Example
console.log(checkNumber(1, 2, 2))
console.log(checkNumber(1, 1, 1))
console.log(checkNumber())