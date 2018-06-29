/**
 * Write a JavaScript program to check if the characters a and b are separated by exactly 
 * 3 places anywhere (at least once) in a given string.
 */
const checkChars = (str = '') => {
    return (/a...b/).test(str) || (/b...a/).test(str)
}
// Example
console.log(checkChars('any b'));
console.log(checkChars('abcd e'));