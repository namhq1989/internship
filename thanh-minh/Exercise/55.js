/*
Write a JavaScript program to check if a given string contains equal number of p's and t's present
*/
function pt(str) {
  let p = 0;
  let t = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'p') p += 1;
    if (str[i] === 't') t += 1;
  }
  if (p === t) return true;
  return false;
}

// Demo
console.log(pt('javascript'));
console.log(pt('tptptpttttt'));
console.log(pt('pptt'));
