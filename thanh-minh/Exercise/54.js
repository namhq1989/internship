/*
Write a JavaScript program to count the number of vowels in a given string.
 */
function vowelsCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      count += 1;
    }
  }
  return count;
}

// Demo
console.log(vowelsCount('thanhminh'));
