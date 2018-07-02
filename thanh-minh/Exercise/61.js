/*
Write a JavaScript program to concatenate two strings except their first character.
 */

function conCatString(str1, str2) {
  if (str1.length > 1 && str2.length > 1) {
    return str1.substring(1, str1.length) + str2.substring(1, str2.length);
  }
  return false;
}

// demo
console.log(conCatString('mot', 'hai'));
