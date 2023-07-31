function checkSumTen(arr) {
  let ar1 = [];
  for (const i of arr) {
    for (const j of arr) {
      if (i + j == 10) {
        ar1.push([i, j]);
      }
    }
  }
  return ar1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(checkSumTen(arr));
