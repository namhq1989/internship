/**
 * Write a JavaScript to find the longest string from an given array of strings.
 */
const findLongestString = (a = []) => {
    let result = ''
    for (let i = 0; i < a.length; i++) {
        if (a[i].length > result.length) {
            result = a[i]
        }
    }
    return result
}
// Example
console.log(findLongestString(['Java', 'Python', 'PHP', 'JavaScript']))