
let arr = [4, 6, 0, "idj", 9, null, NaN, 10, 0]
let zeroElements = 0
let evenElements = 0
let oddElements = 0
for (let i = 0; i < arr.length; i++) {
if (arr [i] === 0){
    zeroElements++
}
else if (arr[i] % 2 === 0 && arr[i] !== null) {
    oddElements++
}
else if (arr[i] % 2 === 1) {
    evenElements++
}
}
console.log (`чётных элементов - ${oddElements} , нечётных элементов - ${evenElements}, нулей - ${zeroElements}`)