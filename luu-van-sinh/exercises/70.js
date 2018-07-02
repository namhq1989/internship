/**
 * Write a JavaScript program to rotate the elements left of a given array of integers of length 3. 
 */
const rotateArray = (arr = []) => {
    let first = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = first
    return arr
}
// Example
console.log(rotateArray([1, 2, 6]));
console.log(rotateArray([1, 2, 6, 5, 3]));