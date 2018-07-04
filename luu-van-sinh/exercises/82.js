/**
 * Write a JavaScript to add two positive integers without carry.
 */
const addWithoutCarray = (n1 = 0, n2 = 0) => {
    let result = 0,
        x = 1
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10)
        n1 = Math.floor(n1 / 10)
        n2 = Math.floor(n2 / 10)
        x *= 10
    }
    return result
}
// Example
console.log(addWithoutCarray(345, 689));