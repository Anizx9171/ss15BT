// function checkNumber(a) {
//     return !isNaN(a);
// }
// function checkNumber(a) {
//     return a<=0 || a>0;
// }
function checkNumber(a) {
    return !Object.is(parseInt(a),NaN);
}
console.log(checkNumber(8));
console.log(checkNumber("7"));
console.log(checkNumber("a"));
console.log(checkNumber("g"));