/**
 * Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
 */
const replaceChars = (str = '') => {
    let newString = ''
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i)
        switch (charCode) {
            case 90:
                charCode = 65
                break;
            case 122:
                charCode = 97
                break;
            default:
                charCode++
                break;
        }

        newString += String.fromCharCode(charCode)
    }
    return newString
}
// Example
console.log(replaceChars('abcxyz'));