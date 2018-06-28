/**
 * Write a JavaScript program to check if three given numbers (integers) are increasing in 
 * strict mode and flag is "false", however if "true" is false the numbers will in soft mode. 
 */
const numberOrder = (x = 0, y = 0, z = 0) => {
    if (y > x && z > y) {
        return 'Strict mode'
    } else if (z > y) {
        return 'Soft mode'
    }
    return 'Undefined'
}
// Example 
console.log(numberOrder(1, 4, 8))
console.log(numberOrder(10, 3, 4))
console.log(numberOrder(10, 3, 3))