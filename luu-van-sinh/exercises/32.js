/**
 * Find a value which is nearest to 100 from two different given integer values
 */
function nearest(a, b) {
    let x = Math.abs(100 - a)
    let y = Math.abs(100 - b)
    if (x === y) {
        return 0
    }
    return (x > y) ? b : a
}

// Example
console.log(nearest(80, 110));