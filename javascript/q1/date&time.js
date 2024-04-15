//1
const d = new Date();
console.log(d);

//2
const y = new Date();
console.log(y.getFullYear());

//3
const date = new Date();
console.log(date.getMonth());

//4
const s = new Date();
console.log(s.getDate());

//5
const p = new Date();
console.log(p.getDay());

//6
const date1 = new Date();
console.log("Houres: " + date1.getHours() + " minutes: " + date1.getMinutes() + " seconds: " + date1.getSeconds());

//7
const now = new Date();
const numOfDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
console.log(numOfDays);

//8
const dayday = new Date();
dayday.setDate(d.getDate() + 1);
console.log(dayday);

//9
const totalinutes=90;
let x=totalinutes/60;
t=x%1;
x=x-t;
let y1=totalinutes%60;
console.log(totalinutes + " minutes is equivalent to : " + x + " Houres and " + y1 + " minutes");
