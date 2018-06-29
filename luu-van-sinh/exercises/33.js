/**
 * Write a JavaScript program to check if two numbers are in range 40..60 
 * or in the range 70..100 inclusive
 */
function isInRange(a=0, b=0) {
    if (((a >= 40 && a <= 60) || (a >= 70 && a <= 100)) 
        || ((b >= 40 && b <= 60) || (b >= 70 && b <= 100))) {
            return true
    }
    return false
}

// Example
console.log(isInRange(60,1));
