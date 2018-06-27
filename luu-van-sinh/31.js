/**
 * Find the largest of three given integers.
 */
function getLargestInt(...n) {
    if(n.length==0){
        return false;
    }
    let max = n[0]
    for (let val of n) {
        if(val>max){
            max = val
        }
    }
    return max
}

// Example
console.log(getLargestInt(1,3,89));
