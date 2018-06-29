/*
Write a JavaScript program to extract the first half of a string of even length
 */
function stringHalf(str) {
  if (str.length % 2 === 0) {
    return str.slice(0, str.length / 2);
  }
  return false;
}
// Demo
console.log(stringHalf('asdfghjk'));
