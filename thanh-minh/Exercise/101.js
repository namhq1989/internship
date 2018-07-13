/**
 *Write a JavaScript program to check whether a given string contains only Latin letters
 and no two uppercase and no two lowercase letters are in adjacent positions
 */
function checkString(str) {
  const isLowerCase = (symbol) => {
    if (symbol >= 'a' && symbol <= 'z') {
      return true;
    }
    return false;
  };

  const isUpperCase = (symbol) => {
    if (symbol >= 'A' && symbol <= 'Z') {
      return true;
    }
    return false;
  };

  if (!(isLowerCase(str[0] || isUpperCase(str[0])))) {
    return false;
  }
  for (let i = 0; i < str.length; i += 1) {
    if (i % 2) {
      if (isLowerCase(str[i]) === isLowerCase(str[0])
            || isUpperCase(str[i] === isUpperCase(str[0]))) {
        return false;
      }
    } else if (isLowerCase(str[i]) !== isLowerCase(str[0])
              || isUpperCase(str[i] !== isUpperCase(str[0]))) {
      return false;
    }
  }
  return true;
}

// Demo
console.log(checkString('aBBcass'));
console.log(checkString('aBc'));
