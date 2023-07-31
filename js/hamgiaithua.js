function giaiThua(a) {
  let tich = 1;
  for (let i = a; i >= 1; i--) {
    tich *= i;
  }
  return tich;
}
console.log(giaiThua(5));