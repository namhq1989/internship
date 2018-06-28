/**
 * program check if a given positive number is a multiple of 3 or a multiple of 7.
 */

function checkNumber(n = 0) {
    return (n % 3 === 0 || n % 7 === 0)
}

// Example
console.log(checkNumber(20));