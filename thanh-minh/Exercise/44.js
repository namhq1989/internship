/*
Write a JavaScript program to check from three given integers
that if a number is greater than or equal to 20 and less than one of the others.
 */
function lessby20(x, y, z) {
  return (x >= 20 && (x < y || x < z))
    || (y >= 20 && (y < x || y < z))
    || (z >= 20 && (z < y || z < x));
}

// Demo
console.log(lessby20(23, 23, 10));
console.log(lessby20(20, 40, 50));
