/**
 *Write a JavaScript program to check whether two given integers are similar or not,
if a given divisor divides both integers and it does not divide either.
For example x = 10, y = 30 and z = 300,
we can replace $ with a multiple operator (*) to obtain x * y = z
 */
function checkArithmetic(num1, num2, num3) {
  return num1 + num2 === num3 || num1 - num2 === num3
            || num1 * num2 === num3 || num1 / num2 === num3;
}

// demo
console.log(checkArithmetic(10, 20, 30));
console.log(checkArithmetic(10, 20, 200));
console.log(checkArithmetic(10, 20, 13));
