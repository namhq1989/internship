/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
C = (5/9) * (F - 32)
*/

function cToF(celsius) {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
  return message;
}

function fToC(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel} \xB0C.`;
  return message;
}
// Demo
console.log('------------');
console.log(cToF(100));
console.log(cToF(0));
console.log('------------');
console.log('------------');
console.log(fToC(212));
console.log(fToC(32));
console.log('------------');
