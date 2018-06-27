/**
 * Write a JavaScript program to find the larger number from the two given positive integers, 
 * the two numbers are in the range 40..60 inclusive.
 */
function maxInRange(a = 0, b = 0) {
    if (isInRange(a) && isInRange(b)) {
        return (a > b) ? a : b
    }
    return false
}

function isInRange(a = 0) {
    return (a >= 40 && a <= 60)
}

// Example
console.log(maxInRange(45,58));
