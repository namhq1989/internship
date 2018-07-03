/**
 * Write a JavaScript program to find the larger value between the first or last and set 
 * all the other elements with that value. Display the new array.
 */
const createNewArray = (arr = []) => {
    let max = Math.max(arr[0], arr[arr.length - 1])
    let result = arr
    result.fill(max)
    return result
}
// Example
console.log(createNewArray([1, 2, 3, 4, 5]));