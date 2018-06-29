/**
 * Write a JavaScript program to check if a given string contains equal number of p's and t's present.
 */
const compareNumPAndT = (str = '') => {
    let p_num = str.replace(/[^p]/g, "").length
    let t_num = str.replace(/[^t]/g, "").length

    return p_num === t_num
}
// Example
console.log(compareNumPAndT('present'));
console.log(compareNumPAndT('string'));