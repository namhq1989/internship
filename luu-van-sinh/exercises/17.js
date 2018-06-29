/*
  compute the absolute difference between a specified number and 19.
  Returns triple their absolute difference if the specified number
  is greater than 19.
*/
function difference(n = 0) {
  return (n > 19) ? 3 * (n - 19) : (19 - n)
}

// Example
console.log(difference(30))