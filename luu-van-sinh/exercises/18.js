/*
  check two given numbers and return true if one of the number is 50
  or if their sum is 50.
*/
function checkNumBer(a = 0, b = 0) {
  return (a === 50 || b === 50) ? true : (a + b === 50)
}

// Example
console.log(checkNumBer(20, 30))