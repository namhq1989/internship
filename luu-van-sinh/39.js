/**
 * Write a JavaScript program to compute the sum of the two given integers, 
 * If the sum is in the range 50..80 return 65 other wise return 80.
 */
function getSumTwoInt(a = 0, b = 0) {
    let sum = a + b;
    return (sum >= 50 && sum <= 80) ? 65 : 80
}
// Example 
console.log(getSumTwoInt(40, 20));
console.log(getSumTwoInt(40, 50));