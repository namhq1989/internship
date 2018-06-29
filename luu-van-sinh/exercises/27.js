/**
 * check if a string starts with 'Java' and false otherwise.
 */
function isStartWithJava(str) {
    let start = str.substring(0, 4)
    return (start === 'Java')
}

// Example
console.log(isStartWithJava('Javascript'));
