//1
let num1 = 8;
let num2 = 15;
let sum = num1 + num2;
console.log(sum);


//2
let a = 30;
let b = 12;
let sub = a - b ;
console.log(sub);

//3
let x = 7;
let y = 3;
let mul = x*y;
console.log(mul);

//4
let dividend = 20;
let divisor = 4 ;
let div = dividend/divisor;
console.log(div);
let div2 = dividend%divisor;
console.log(div2);

//5
let numer1 =15;
let numer2= 25;
let numer3 =10;
let avg = (numer1+ numer2+ numer3)/3 ;
console.log(avg);


//6
let k=20;
console.log(k%3);
/* the result is 2 that mean (2 is the number that remind after we divid 20 / 3)*/

//7

let n=11;
let odd = n%2;
if (odd == 1)
{
    console.log("odd number");
}
else 
{
    console.log("even number");
}
// i defined n = 11 to try it .

//8

let l=35;
 if(l%5==0 && l%7==0)
 {
    console.log("perfict number");
 }
 else 
 {
    console.log("not perfict number");
 }


 //9
 let count =0;
 for( let i=1; i<=20; i++)
 {
    if(i%4 == 0)
    count+=i;
 }
 console.log(count);

 //10

let q=15;
if(q>10 && q<20)
{
    console.log("nice");
}
else console.log("not");

//11
let r=3;
if(r>10 && r<(-5))
{
    console.log("nice");
}
else console.log("not");

//12
let boolean="fofo";

if(!boolean)
{
    console.log("nice");
}
else console.log("not");

//13

let u=25;
if((u>5 && u<10)|| (u>20 && u<30))
{
    console.log("nice");
}
else console.log("not");
