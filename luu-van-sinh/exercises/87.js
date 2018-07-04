/**
 * Write a JavaScript program to check whether two arrays of integers of same length are 
 * similar or not. The arrays will be similar if one array can be obtained from another 
 * array by swapping at most one pair of elements.
 */
const arraysAreSimilar = (a1 = [], a2 = []) => {
    if (a1.length !== a2.length) {
        return false
    }
    let tempArr = []
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            tempArr.push(i)
        }
    }
    if (tempArr.length > 2) {
        return false
    } else {
        return (a1[tempArr[0]] === a2[tempArr[1]] && a1[tempArr[1]] === a2[tempArr[0]])
    }
}
console.log(arraysAreSimilar([1, 3, 4, 2], [1, 2, 3, 4]));
console.log(arraysAreSimilar([1, 3, 2], [1, 2, 3]));