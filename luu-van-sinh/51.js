/**
 *  Write a JavaScript program to convert a given number to hours and minutes.
 */
const numberToHours = (number = 0) => {
    let hours = Math.floor(number / 3600)
    let minutes = number % 60
    return hours + ' : ' + minutes
}
// Example
console.log(numberToHours(10000));