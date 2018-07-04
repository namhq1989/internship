/**
 * Write a JavaScript to find the longest string from an given array of strings
 */
function longestString(arrayStr) {
  let max = arrayStr[0].length;
  arrayStr.map(a => max = Math.max(max, a.length));
  result = arrayStr.filter(m => m.length === max);
  return result;
}

// Demo
console.log(longestString(['12344', '2132', '343']));
