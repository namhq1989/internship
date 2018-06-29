/**
 * Write a JavaScript program to create a new string of 4 copies of the last 3 characters 
 * of a given original string. The length of the given string must be 3 and above.
 */
const stringCopies = (str = '') => {
    if (str.length < 3) {
        return false
    }
    let temp = str.substring(str.length - 3, str.length)
    return temp.repeat(4)
}
// Example
console.log(stringCopies('string'));