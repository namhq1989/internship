/**
 * Write a JavaScript program to check a given string contains 2 to 4 numbers 
 * of a specified character
 */
function countCharInStr(str, char) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++
        }
    }
    return (count >= 2 && count <= 4)
}
// Example 
console.log(countCharInStr('JavaScript', 'a'));
console.log(countCharInStr('Python', 'o'));