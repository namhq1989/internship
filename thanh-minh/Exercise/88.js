/*
Write a JavaScript program to check whether two given integers are similar or not,
 if a given divisor divides both integers and it does not divide either.
*/
function checkNumbers(num1, num2, divisor) {
  if ((num1 % divisor === 0 && num2 % divisor === 0)
        || (num1 % divisor !== 0 && num2 % divisor !== 0)) {
    return true;
  }
  return false;
}

// Demo
console.log(checkNumbers(15, 25, 5));
console.log(checkNumbers(15, 26, 5));
