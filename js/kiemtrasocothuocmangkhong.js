function checkNumberThuocArrNo(arr,a) {
    let count = 0;
    let flag = true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == a){
            count++
            flag = false
        }
    }
    if (flag) {
        return -1;
    }else{
        return count;
    }
}
console.log(checkNumberThuocArrNo([1,2,3,4,5,6,6,6,7],6));