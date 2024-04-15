
//1
let isSunny = true;
let isWeekend = false;
console.log(isSunny&&isWeekend);

//2
let age = 20;
let license = true;

    if((age>18)&&(license))
    console.log("yes the age over 18 and he has a driving license");
else console.log("no the age not over 18 and he has not a driving license");


//3
let knowJavaScript = false;
let knowsPython = true;
if ((knowJavaScript) || (knowsPython))
{
    console.log("yes i know at less one of the two");
}
else console.log("no i don't know any one");

//4
let isRaining = true;
console.log((!isRaining));

//5
let likeMusic = true;
let playsGuitar = false;
hasTime = false;
 if (((likeMusic)&&(playsGuitar)) || (hasTime))
 {
    console.log("yes it is perfict to learn or play Guitar");
 }
 else  console.log("no , its not possible");

 //6
 let personAge = 25;
 if (personAge>18)
 {
    console.log("yes its true");
 }
 else  console.log("no its not true");

 //7

let currentTemperature=30;
if (currentTemperature<20 || currentTemperature>30)
{
    console.log("yes its true");
}
else console.log("no its not true");

//8
let firstNumber=10;
secondNumber='10';

if(firstNumber==secondNumber)
{
    console.log("yes its true");
}
else  console.log("no its not true");


if(firstNumber===secondNumber)
{
    console.log("yes its true");
}
else  console.log("no its not true");

//9
let budget=500;
let expense=450;
if(expense<=budget)
{
    console.log("expense is less than or equal to the budget");
}
else  console.log("expense is bigger than the budget");

//10
let person1Height=170;
let person2Height=165;
if(person1Height<=person2Height)
{
    console.log("person1Height is less than or equal to the person2Height");
}
else  console.log("person1Height is bigger than the person2Height");
