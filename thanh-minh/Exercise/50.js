/*
Write a JavaScript program to capitalize the first letter of each word of a given string
 */
function upperCaseFirst(str) {
  let chuoi = str.split(" ");
  for (let i = 0; i < chuoi.length; i += 1) {
    chuoi[i] = chuoi[i].charAt(0).toUpperCase() + chuoi[i].substr(1);
   }
  return chuoi.join(" ");
}

// Demo
console.log(upperCaseFirst('assdas fgddf fvdf '));
