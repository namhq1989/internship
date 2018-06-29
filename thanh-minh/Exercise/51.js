/*
Write a JavaScript program to convert a given number to hours and minutes
*/
function timeConvert(a) {
  const hour = Math.floor(a / 60);
  const minute = a % 60;
  return `${hour}:${minute}`;
}

// Demo
console.log(timeConvert(1000));
