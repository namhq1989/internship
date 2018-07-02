/**
 * Write a JavaScript program to concatenate two strings and return the result. 
 * If the length of the strings are not same then remove the characters from the 
 * longer string.
 */
const concatString = (str1 = '', str2 = '') => {
    if (str1.length === str2.length) {
        return str1.concat(str2)
    }
    let min = Math.min(str1.length, str2.length)
    return str1.substring(str1.length - min) + str2.substring(str2.length - min)
}
// Example
console.log(concatString('Java', 'Python'));