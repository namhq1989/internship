/**
 * Write a JavaScript program to create a string using the middle three characters of a 
 * given string of odd length. The string length must be greater or equal to three.
 */
const getMiddleChars = (str = '') => {
    if (str.length % 2 === 0 || str.length < 3) {
        return false
    }
    let start = Math.floor(str.length / 2)
    return str.substring(start, start + 3)
}
// Example
console.log(getMiddleChars('abcdefg'));