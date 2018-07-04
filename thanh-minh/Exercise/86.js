/**
 * Write a JavaScript program to find the types of a given angle
 * Types of angles:
        Acute angle: An angle between 0 and 90 degrees.
        Right angle: An 90 degree angle.
        Obtuse angle: An angle between 90 and 180 degrees.
        Straight angle: A 180 degree angle.
 */
function findAngle(angle) {
  if (angle < 90) {
    return ' Acute angle: An angle between 0 and 90 degrees.';
  }
  if (angle === 90) {
    return ' Right angle: An 90 degree angle.';
  }
  if (angle > 90 && angle < 180) {
    return ' Obtuse angle: An angle between 90 and 180 degrees.';
  }
  return ' Straight angle: A 180 degree angle.';
}

// Demo
console.log(findAngle(80));
console.log(findAngle(170));
console.log(findAngle(90));
console.log(findAngle(180));
