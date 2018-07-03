/**
 * Write a JavaScript program to create a new array taking the middle elements of the 
 * two arrays of integer and each length 3.
 */
const createNewArray = (arr1 = [], arr2 = []) => {
    if (arr1.length !== 3 || arr2.length !== 3) {
        return false
    }
    let newArray = []
    newArray.push(arr1[1], arr2[1])
    return newArray
}
// Example 
console.log(createNewArray([1, 2, 3], [4, 5, 6]));