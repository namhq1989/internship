/*
Write a JavaScript program to create a new array taking the first and
 last elements from a given array of integers and length must be greater or equal to 1
*/
function createArr(array) {
  if (array.length >= 1) {
    const arrNew = [];
    arrNew.push(array[0], array[array.length - 1]);
    return arrNew;
  }
  return false;
}

// Demo
console.log(createArr([1, 3, 4, 5, 6]));
console.log(createArr([]));
