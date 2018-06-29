/**
 * Write a JavaScript program to extract the first half of a string of even length.
 */
const extractString = (str = '') => {
    return (str.length % 2 === 0) ? str.substring(0, str.length / 2) : str
}
// Example
console.log(extractString('JavaScript'));