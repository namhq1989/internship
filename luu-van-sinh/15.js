/*
  Get the difference between a given number and 13.
  If the number is greater than 13 return double the absolute difference
*/
function difference(n = 0) {
  return (n > 13) ? (n - 13) * 2 : 13 - n
}
// Example
console.log(difference(10))