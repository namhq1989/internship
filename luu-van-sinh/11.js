/*
  Convert temperatures to and from Celsius, Fahrenheit
*/

function celsiusToFahrenheit(c = 0) {
  return (c / 5) * 9 + 32
}

function fahrenheitToCelsius(f = 0) {
  return 5 * ((f - 32) / 9)
}

//Example
console.log('30\xB0C is: ' + celsiusToFahrenheit(30) + '\xB0F')
console.log('86\xB0F is: ' + fahrenheitToCelsius(86) + '\xB0C')