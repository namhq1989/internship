/*
  Create a variable using a user-defined name
*/
const varName = 'abcd'
const n = 100
this[varName] = n
console.log(this[varName])