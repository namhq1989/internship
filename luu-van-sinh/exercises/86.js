/**
 * Write a JavaScript program to find the types of a given angle.
 */
const typeOfAngle = (angle = 0) => {
    if (angle > 180) {
        return false
    }
    if (angle <= 90) {
        return (angle === 90) ? "Right angle" : "Acute angle"
    } else {
        return (angle === 180) ? "Straight angle" : "Obtuse angle"
    }
}
// Example
console.log(typeOfAngle(120));
console.log(typeOfAngle(68));
console.log(typeOfAngle(90));