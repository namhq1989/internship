/*
Write a JavaScript program to display the city name
 if the string begins with "Los" or "New" otherwise return blank.
*/

function cityName(str) {
  if (str.length >= 3 && ((str.substring(0, 3) === 'New') || (str.substring(0, 3) === 'Los'))) {
    return str;
  }
  return false;
}

// Demo
console.log(cityName('NewYorks'));
console.log(cityName('VietNam'));
console.log(cityName('LosAnsldd'));
