/**
 * Write a JavaScript program to check from three given integers that if a number is 
 * greater than or equal to 20 and less than one of the others. 
 */
const checkNumber = (a = 0, b = 0, c = 0) => {
    let arrNum = []
    arrNum.push(a, b, c)
    arrNum.sort()
    return (arrNum[0] >= 20 || arrNum[1] >= 20)
}
// Example
console.log(checkNumber(30, 100, 22));
console.log(checkNumber(30, 2, 12));