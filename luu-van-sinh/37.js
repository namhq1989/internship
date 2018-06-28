/**
 * Write a JavaScript program to create new string with first 3 characters are in lower case. 
 * If the string length is less than 3 convert all the characters in upper case.
 */
function convertStr(str) {
    if (str.length < 3) {
        return str.toUpperCase()
    }
    let first = str.substring(0, 3)
    return first.toLowerCase() + str.substring(3, str.length)
}
// Example
console.log(convertStr('ab'));
console.log(convertStr('JAVASCRIPT'));