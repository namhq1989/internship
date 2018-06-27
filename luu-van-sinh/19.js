/*
  check a given integer is within 20 of 100 or 400
*/
function checkNumBer(n = 0) {
  return (n === 400 || (n >= 20 && n <= 100))
}

// Example
console.log(checkNumBer(10))
console.log(checkNumBer(40))
console.log(checkNumBer(400))