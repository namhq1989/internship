/**
 * Write a JavaScript program to find the kth greatest element of a given array of integers
 */
function findElement(array, k) {
  for (let i = 0; i < k; i += 1) {
    let maxIndex = i;
    const tmp = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }

    array[i] = array[maxIndex];
    array[maxIndex] = tmp;
  }
  return array[k - 1];
}

// Demo
console.log(findElement([1, 2, 7, 4, 5], 3));
