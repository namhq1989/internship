/**
 * program to check if a string "Script" presents at 5th (index 4) position in a 
 * given string, if "Script" presents in the string return the string without 
 * "Script" otherwise return the original one. 
 */
function checkScript(str) {
    if (str.length < 6) {
        return str
    }

    let result = str
    
    if (str.substring(4,10) == 'Script') {
        result = str.substring(0, 4) + str.substring(10, str.length);
    }
    return result;
}
// Example
console.log(checkScript("JavaScript"));
console.log(checkScript("CoffeeScript"));