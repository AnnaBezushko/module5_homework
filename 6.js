// let arr =  [3, 3, 4, 4, 4];
let arr =  [4, 4, 4, 4, 4];
let x = arr[0];
function areSame(element) {
  return element == x;
}
console.log (arr.every(areSame))
