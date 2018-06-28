/**
 * check if three given integer values are in the range 50..99 (inclusive). 
 * Return true if one or more of them are in the said range
 */
function checkNumber(a=0, b=0, c=0) {
    return ((a >= 50 && a <= 59) || (b >= 50 && b <= 59) || (c >= 50 && c <= 59))
}

// Example
console.log(checkNumber(1,2,50));
