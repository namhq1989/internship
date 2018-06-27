/**
 * check if two given integer values are in the range 50..99 (inclusive). 
 * Return true if either of them are in the said range.
 */
function checkNumber(a = 0, b = 0) {
    return ((a >= 50 && a <= 59) || (b >= 50 && b <= 59))
}

// Example
console.log(checkNumber(49,60));
