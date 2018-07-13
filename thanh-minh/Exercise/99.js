/*
 Write a JavaScript program to check whether it is possible
 to rearrange characters of a given string in such way
 that it will become equal to another given string
  */
function rearrangementCheck(str1, str2) {
  const first = str1.split('');
  const second = str2.split('');
  first.sort();
  second.sort();
  let result = true;
  for (let i = 0; i < Math.max(first.length, second.length); i += 1) {
    if (first[i] !== second[i]) {
      result = false;
    }
  }
  return result;
}

// Demo
console.log(rearrangementCheck('abcd', 'dcba'));
console.log(rearrangementCheck('abed', 'dcba'));
