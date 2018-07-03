/**
 *Write a JavaScript program to create a new array taking the middle elements of
 *  the two arrays of integer and each length 3.
 */
function middleArray(arr0, arr1) {
  if (arr0.length === 3 && arr1.length === 3) {
    const arrNew = [];
    arrNew.push(arr0[1], arr1[1]);
    return arrNew;
  }
  return false;
}

// Demo
console.log(middleArray([1, 2, 3], [1, 4, 5]));
