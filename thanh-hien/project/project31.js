function check_numbers(x)
{
    return ((x % 7 === 0 || x % 11 === 0) && (x % 7 !== x % 11));
}
console.log(check_numbers(14));
console.log(check_numbers(22));
console.log(check_numbers(17));
console.log(check_numbers(120));