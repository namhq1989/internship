/**
 * Write a JavaScript to add two positive integers without carry
 */
function addTwoPositive(a, b) {
  let result = 0;
  let x = 1;
  while (a > 0 && b > 0) {
    result += x * ((a + b) % 10);
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
    x *= 10;
  }
  return result;
}

// demo
console.log(addTwoPositive(222, 911));
