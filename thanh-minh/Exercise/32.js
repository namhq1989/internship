/*
 Write a JavaScript program to find a value which is nearest to 100 from
  two different given integer values
*/

function near100(a, b) {
  if (a !== b) {
    const a1 = Math.abs(100 - a);
    const b1 = Math.abs(100 - b);
    if (a1 < b1) {
      return a;
    }
    if (b1 < a1) {
      return b;
    }
    return 0;
  }
  return false;
}

// Demo
console.log(near100(10, 90));
