/*
Write a JavaScript program to check the total marks of a student in various examinations.
The student will get A+ grade if the total marks are in the range 89..100 inclusive,
if the examination is "Final-exam." the student will get A+ grade and total
marks must be greater than or equal to 90.
Return true if the student get A+ grade or false otherwise.
*/
function examStatus(mark, isExam) {
  if (isExam) {
    return mark >= 90;
  }
  return (mark >= 89 && mark <= 100);
}

// Demo
console.log(examStatus(90, 'true '));
console.log(examStatus(70, ' '));
