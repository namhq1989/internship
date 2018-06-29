/**
 * create a new string from a given string with the first character of the given string 
 * added at the front and back.
 */

function addCharacter(str) {
    let first = str.charAt(0)
    return first + str + first
}

// Example
console.log(addCharacter('Python'));