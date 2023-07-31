let chuoi = "Hello World";
chuoi = chuoi.toLowerCase();
let chuDaKiemTra = [];
function ktSoLan(chuCai) {
  let count = 0;
  for (i = 0; i < chuDaKiemTra.length; i++) {
    if (chuCai == chuDaKiemTra[i]) {
      return;
    }
  }
  for (i = 0; i < chuoi.length; i++) {
    if (chuCai == chuoi[i]) {
      count++;
    }
  }
  chuDaKiemTra.push(chuCai);
  return count;
}
for (let i = 0; i < chuoi.length; i++) {
  let count = ktSoLan(chuoi[i]);
  if (count != undefined) {
    console.log(`Chu ${chuoi[i]} xuat hien ${count} lan`);
  }
}
