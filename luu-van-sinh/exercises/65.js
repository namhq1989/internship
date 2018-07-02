/**
 * Write a JavaScript program to test if a string end with "Script". The string 
 * length must be greater or equal to 6.
 */
const endWithScript = (str = '') => {
    if (str.length < 6) {
        return false
    }
    return str.substring(str.length - 6) == "Script"
}
// Example
console.log(endWithScript('JavaScript'));
console.log(endWithScript('Javascript'));