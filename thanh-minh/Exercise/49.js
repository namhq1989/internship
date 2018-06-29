/*
Write a JavaScript program to replace every character in a given string
with the character following it in the alphabet
*/

function stringChange(str) {
  const chuoi = str.split('');
  for (let i = 0; i < chuoi.length; i += 1) {
    switch (chuoi[i]) {
      case ' ': break;
      case 'z':
        chuoi[i] = 'a';
        break;
      case 'Z':
        chuoi[i] = 'A';
        break;
      default:
        chuoi[i] = String.fromCharCode(1 + chuoi[i].charCodeAt(0));
    }
  }
  return chuoi.join('');
}

// Demo
console.log(stringChange('acbdef ffff'));
