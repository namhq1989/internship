/**
 * Write a JavaScript program to create a new array taking the first and last elements 
 * from a given array of integers and length must be greater or equal to 1.
 */
const createNewArray = (a = []) => {
    if (a.length === 0) {
        return false
    }
    let newArray = []
    newArray.push(a[0], a[a.length - 1])
    return newArray
}
// Example 
console.log(createNewArray([1, 2, 3, 4]));