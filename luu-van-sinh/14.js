/*
  Get extension of filename.
*/
function getExtensionFilename(filename = 'test.txt') {
  return filename.split('.').pop()
}
// Example
console.log(getExtensionFilename('abc.js'))