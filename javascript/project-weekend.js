//1
let boolean = true;
function ifbool(boolean) {
  if (boolean) {
    return 'yes';
  } else {
    return 'no';
  }
}
console.log(ifbool(boolean));

//2.1
let array = [10, 343445353, 3453445, 3453545353453];
let minfirstnumber = array[0];
let minsecondnumber = array[array.length - 1];
let sum, y;

for (let i = 0; i < array.length; i++) {
  if (array[i] < minfirstnumber && array[i] > 0) {
    minfirstnumber = array[i];
    y = i;
    console.log(y);
  } else y = 0;
}
for (let j = 0; j < array.length; j++) {
  if (array[j] < minsecondnumber && array[j] > 0 && y != j) {
    minsecondnumber = array[j];
  }
}
sum = minfirstnumber + minsecondnumber;
console.log(sum);

//2.2
let binaryarray = [1, 1, 1, 1];
let binaryString = binaryarray.join('');
console.log(parseInt(binaryString, 2));

//2.3
let n = 9;
function findNextSquare(n) {
  if (Math.sqrt(n) == parseInt(Math.sqrt(n)) && n >= 0) {
    return (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
  } else {
    return -1;
  }
}
console.log(findNextSquare(n));

//2.4
let equalnumbers = [10, 10, 10, 10, 10, 0];
function findUniq(equalnumbers) {
  let notequalnum = equalnumbers[0];
  for (let i = 1; i < equalnumbers.length; i++) {
    if (
      equalnumbers[i] != equalnumbers[i - 1] &&
      equalnumbers[i] != equalnumbers[i + 1]
    ) {
      return equalnumbers[i];
      break;
    }
  }
  return notequalnum;
}
console.log(findUniq(equalnumbers));

//2.5
let num = 8;
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(num));

//2.6
let year = 1601;
function centuryFromYear(year) {
  if (year % 100 > 0) {
    return parseInt(year / 100) + 1;
  } else return parseInt(year / 100);
}
console.log(centuryFromYear(year));

//2.7
let operation = '/';
let value1 = 49;
let value2 = 7;
function basicOp(operation, value1, value2) {
  if (operation == '-') {
    return value1 - value2;
  }
  if (operation == '+') {
    return value1 + value2;
  }
  if (operation == '*') {
    return value1 * value2;
  }
  if (operation == '/') {
    return value1 / value2;
  }
}
console.log(basicOp(operation, value1, value2));

//3.1
let p0 = 1500000;
let percent = 2.5;
let aug = 10000;
let p = 2000000;
function nb_year(p0, percent, aug, p) {
  let percentage = percent / 100;
  let yearsneed = 1;
  let population = p0 + p0 * percentage + aug;
  let newp0 = population;
  if (population > p) {
    return yearsneed;
  }

  while (population < p) {
    population = newp0 + newp0 * percentage + aug;
    newp0 = population;
    yearsneed++;
  }
  return yearsneed;
}
console.log(nb_year(p0, percent, aug, p));

//3.2

Busarray = [
  [5, 0],
  [6, 1],
  [5, 4],
  [8, 3],
];
function BusStation(Busarray) {
  sum = Busarray[0][0];

  for (let i = 1; i < Busarray.length; i++) {
    sum = sum + Busarray[i][0] - Busarray[i][1];
  }
  return sum;
}
console.log(BusStation(Busarray));

//4.1
let index = 12;
function Fibonacci(n) {
  let fibon = [0, 1];
  for (let i = 2; i < n; i++) {
    fibon.push(fibon[i - 2] + fibon[i - 1]);
  }
  return fibon;
}
console.log(Fibonacci(index));

//4.2
let index2 = 12;
let Tribonacci = [1, 1, 1];
function AKATribonacci(n, Tribonacci) {
  let nothing = [];
  if (n === 0) {
    return nothing;
  } else if (n < 0 || n != parseInt(n)) {
    return 'n note a nurmal number';
  }

  for (let i = 3; i < n; i++) {
    Tribonacci.push(Tribonacci[i - 3] + Tribonacci[i - 2] + Tribonacci[i - 1]);
  }
  return Tribonacci;
}
console.log(AKATribonacci(index2, Tribonacci));

//5.1
let theString = 'Rula';
function removechar(theString) {
  let newarry = theString.split('');
  let returnString = [];
  for (let i = 1; i < newarry.length - 1; i++) {
    returnString.push(newarry[i]);
  }
  return returnString.join('');
}
console.log(removechar(theString));

//5.2
let str = 'Hello';
let count = 5;
function repeat_str(count, str) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(str);
  }
  let newstr = arr.join('');
  return newstr;
}
console.log(repeat_str(count, str));

//5.3

let sentence = 'the-stealth-warrior';
function toCamelCase(sentence) {
  let arr1 = [];
  let arr = sentence.split('');
  let x;

  if (arr[0].match(/^[a-zA-Z]+$/)) {
    arr1.push(arr[0]);
  }

  for (let i = 1; i < arr.length; i++) {
    if (!arr[i].match(/^[a-zA-Z]+$/)) {
      y = arr[i + 1].toUpperCase();
      arr[i + 1] = y;
    } else {
      arr1.push(arr[i]);
    }
  }

  return arr1.join('');
}

console.log(toCamelCase(sentence));

//5.4
let mystring = 'Rula Abo Zid';
function toWeirdCase(mystring) {
  let array = mystring.split('');
  let array1 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == ' ') {
      array1.push(' ');
    } else if (i % 2 == 0) {
      array1.push(array[i].toUpperCase());
    } else {
      array1.push(array[i].toLowerCase());
    }
  }
  return array1.join('');
}
console.log(toWeirdCase(mystring));

//5.5
let stringname = 'Rula abozaid';

function convertname(stringname) {
  let arr1 = [];
  let arr = stringname.split(' ');
  let c = arr[0].slice(0, 1).toUpperCase();
  let c1 = arr[1].slice(0, 1).toUpperCase();
  arr1.push(c + '.' + c1);
  return arr1.join();
}

console.log(convertname(stringname));

//5.6
let secret = '64607935616';
function maskify(secret) {
  let array = secret.split('');
  let arr = [];
  if (array.length < 4) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 4 && array[i] != ' ') {
      arr.push('#');
    } else if (i >= array.length - 4) {
      arr.push(array[i]);
    } else {
      arr.push(' ');
    }
  }
  return arr.join('');
}
console.log(maskify(secret));

//5.7
let stringminlength = 'Rula Abo Zaid';

function shortestwords(stringminlength) {
  let arr = stringminlength.split(' ');
  let min = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    let str = arr[i].length;
    if (min > str) {
      min = str;
    }
  }
  return min;
}
console.log(shortestwords(stringminlength));

//5.8
let stringminlength1 = 'Rula Abo Zaid';

function longestwords(stringminlength1) {
  let arr = stringminlength1.split(' ');
  let max = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    let str = arr[i].length;
    if (max < str) {
      max = str;
    }
  }
  return max;
}
console.log(longestwords(stringminlength1));
//6.1
let str5 = 'cwAt';

function accum(str5) {
  let arr = str5.split('');
  let count = 1;
  let newarray = [];
  newarray.push(arr[0].toUpperCase());
  for (let i = 1; i < arr.length; i++) {
    newarray.push('-');
    newarray.push(arr[i].toUpperCase());
    for (let j = 0; j < count; j++) {
      newarray.push(arr[i].toLowerCase());
    }
    count++;
  }
  return newarray.join('');
}
console.log(accum(str5));

//6.2
let douple = 'abbcade';

function CountingDuplicates(douple) {
  let newarray = [];
  let arr = douple.split('');
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[j] === char.toUpperCase() || arr[j] === char.toLowerCase()) {
          count++;
        }
      }
    }
    if (count > 1 && !newarray.includes(char)) {
      newarray.push(char);
      newarray.push(' repeats ' + count + ' times , ');
    }
  }
  if (!newarray) {
    return '0 # no characters repeats more than once';
  }
  return newarray.join('');
}

console.log(CountingDuplicates(douple));

//6.3
a = 'xyaabbbccccdefww';
b = 'xxxxyyyyabklmopq';

function organizeStrings(s1, s2) {
  let arr = s1.split('');
  let arr1 = s2.split('');
  let newstring = [];
  newstring.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (!newstring.includes(arr[i])) {
      newstring.push(arr[i]);
    }
  }
  for (let j = 0; j < arr1.length; j++) {
    if (!newstring.includes(arr1[j])) {
      newstring.push(arr1[j]);
    }
  }
  newstring.sort();
  return newstring.join('');
}
console.log(organizeStrings(a, b));

//6.4
let isogram = '';

function Anisogram(isogram) {
  if (isogram == '') {
    return true;
  }
  let arr = isogram.split('');
  let str = arr[0];
  arr.shift();
  while (arr.length > 0) {
    if (
      arr.includes(str) ||
      arr.includes(str.toUpperCase()) ||
      arr.includes(str.toLowerCase())
    ) {
      return false;
    } else {
      str = arr[0];
      arr.shift();
    }
  }
  return true;
}
console.log(Anisogram(isogram));

//7 i hope that i understood the quistion right , i think that i need to explan how every js method work!! :)
//foreach
let forArray = ['Rula', 'Nael', 'Luna'];
function forEach(forArray) {
  let forNewArray = [];
  for (let i = 0; i < forArray.length; i++) {
    forNewArray.push([i, forArray[i]]);
  }
  return forNewArray;
}
console.log(forEach(forArray));

//filter
let ages = [32, 33, 16, 40];
let age = 18;
function Filter(ages, age) {
  let newAges = [];
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= age) {
      newAges.push(ages[i]);
    }
  }
  return newAges;
}
console.log(Filter(ages, age));

//map
let mapArray = [1, 2, 3];
for (let i = 0; i < mapArray.length; i++) {
  consolLog(mapArray[i]);
}

function consolLog(x) {
  console.log(x);
  return '';
}

//8
let length = 6;
let width = 7;
function findPerimeter(length, width) {
  return length * 2 + width * 2;
}
console.log(findPerimeter(length, width));
