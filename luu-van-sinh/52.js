/**
 * Write a JavaScript program to convert the letters of a given string in alphabetical order. 
 */
const toAlphabeOrder = (str = '') => {
    let temp = str.split("")
    temp.sort()

    return temp.join("")
}
// Example
console.log(toAlphabeOrder('convert'));