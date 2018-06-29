/**
 * Write a JavaScript program to reverse a given string.
 */
const reverseStr = (str = '') => {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i)
    }
    return result
}

// Example
console.log(reverseStr('JavaScript'))