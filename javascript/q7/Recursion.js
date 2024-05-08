//1

function Sum(n) {
  if (n === 1) {
    return n;
  }
  return n + Sum(n - 1);
}
const result = Sum(5);
console.log(result);
//2

let str = 'rula';

function printreversestring(str) {
  if (str === '') {
    return '';
  }
  return printreversestring(str.substring(1)) + str.charAt(0);
}
console.log(printreversestring(str));

//3
function print(n) {
  if (n === 1) {
    return console.log(n);
  }
  return console.log(n) + print(n - 1);
}
const printer = print(5);

//4
let Arr = ['8', '17', '25', '42', '67'];

function printArray(array) {
  if (array.length > 0) {
    return console.log(array.shift()) + printArray(array);
  }
}
printArray(Arr);
