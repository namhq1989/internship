/**
 * Write a JavaScript program to concatenate two strings except their first character.
 */
const concatString = (str1 = '', str2 = '') => {
    return str1.substring(1).concat(str2.substring(1))
}
// Example
console.log(concatString('Java', 'Python'));