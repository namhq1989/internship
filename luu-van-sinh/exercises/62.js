/**
 * Write a JavaScript program to move last three character to the start of a given string. 
 * The string length must be greater or equal to three.
 */
const convertString = (str = '') => {
    if (str.length < 3) {
        return str
    }
    let lastChars = str.substring(str.length - 3)
    return lastChars + str.substring(0, str.length - 3)
}
// Example
console.log(convertString('Assembly'));