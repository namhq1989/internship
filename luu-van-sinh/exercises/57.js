/**
 * Write a JavaScript program to create a new string of specified copies (positive number) 
 * of a given string.
 */
const stringCopies = (str = '', n = 0) => {
    if (n < 0) {
        return false
    }

    return str.repeat(n)
}
// Example
console.log((stringCopies('abc', 3)))