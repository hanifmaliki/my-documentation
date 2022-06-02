// Conditional (Ternary) Operator
const satu = false;
console.log('1', satu ? 'bener' : 'salah')

// Nullish Coalescing
const angka = {
    satu: '11',
    // tiga: '',
    tiga: 0
}
console.log('2', angka.tiga || 'pake or')
// Only work for node 14++
// console.log('3', angka.tiga ?? 'pake qm') // only if null or undefined

// Optional Chaining
// Only work for node 14++
// const obj = {
//     satu: "11",
//     dua: "22"
// }

// if (obj.tiga?.next) {
//     console.log('4', obj.tiga?.next)
// }
// else {
//     console.log('5', 'sini')
// }