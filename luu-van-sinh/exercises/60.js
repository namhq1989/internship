/**
 * Write a JavaScript program to create a new string without the first and last character 
 * of a given string.
 */
const removeFirstAndLastChars = (str = '') => {
    return str.substring(1, str.length - 1)
}
// Example
console.log(removeFirstAndLastChars('JavaScript'));