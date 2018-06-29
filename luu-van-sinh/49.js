/**
 * Write a JavaScript program to replace every character in a given string with the character 
 * following it in the alphabet.
 */
const replaceChars = (str = '') => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) + 1)
    }
    return result
}
// Example 
console.log(replaceChars('JavaScript'))