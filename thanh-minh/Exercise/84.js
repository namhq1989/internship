/**
 * Write a JavaScript to replace each character of a given string
 *  by the next one in the English alphabet.
 * Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
 */
function alphabetCharShift(str) {
  const arrStr = str.trim().split('');
  for (let i = 0; i < arrStr.length; i++) {
    let n = arrStr[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26;
    arrStr[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return arrStr.join('');
}

// Demo
console.log(alphabetCharShift('acbdefzzzz'));
