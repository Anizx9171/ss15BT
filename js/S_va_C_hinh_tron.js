function sAndCCircle(radius) {
    let s = Math.PI*radius*radius
    let c = Math.PI*radius*2
    return [s,c]
}
console.log(sAndCCircle(10));