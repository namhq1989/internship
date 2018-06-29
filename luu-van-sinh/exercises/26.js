/**
 * create a new string from a given string taking the last 3 characters 
 * and added at both the front and back. The string length must be 3 or more.
 */

function addThreeChars(str) {
    if (str.length < 3) {
        return false
    }

    let lastThreeChars = str.substring(str.length - 3, str.length)
    return lastThreeChars + str + lastThreeChars
}

// Example
console.log(addThreeChars('React'));