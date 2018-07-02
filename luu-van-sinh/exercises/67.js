/**
 * Write a JavaScript program to create a new string from a given string, removing 
 * the first and last characters of the string if the first or last character are 
 * 'P'. Return the original string if the condition is not satisfied.
 */
const checkFirstAndLastChars = (str = '') => {
    if (str.charAt(0) == 'P' || str.charAt(str.length - 1) == 'P') {
        return str.substring(1, str.length - 1)
    }
    return str
}
// Example
console.log(checkFirstAndLastChars('Python'));
console.log(checkFirstAndLastChars('Java'));