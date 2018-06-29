/**
 * Write a JavaScript program to count the number of vowels in a given string.
 */
const countVowels = (str = '') => {
    return str.replace(/[^aeiou]/g, "").length
}
// Example
console.log(countVowels('Nodejs'));
console.log(countVowels('JavaScript'));