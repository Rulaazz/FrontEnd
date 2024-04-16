//1
let travelBudget;
if(travelBudget>1000)
{
    console.log("Luxury travel options availabe");
}
else
{
    console.log("Looking for budget travel");
}

//2
let destinationTemp;
if(destinationTemp>15 && destinationTemp<27)
{
    console.log("Ideal weather for the trip");
}
else
{
    console.log("Consider another destination or time");
}

//3 
let flightBooked;
let hotelBooked;
if(flightBooked)
{
    if(hotelBooked)
    {
        console.log("Your travel plan is set");
    }
    else
    {
        console.log("You need to book a hotel");
    }
}
else 
{
    console.log("You need to book a flight");
}

//4

let chosenPackagePrice;
let alternativePrice;
if(chosenPackagePrice==alternativePrice)
{
    console.log("You've chosen the best priced package");
}
else if(alternativePrice<chosenPackagePrice)
{
    console.log("Consider switching for a better price");
}

//5
let travelerAge;
if(travelerAge>65)
{
    console.log("Eligible for senior citizen discounts");
}
else if(travelBudget<=18)
{
    console.log("Eligible for student discount");
}
else
{
    console.log("Regular pricing applies");
}

//6

let satisfactionScore;
if(satisfactionScore>=80)
{
    console.log("Highly satisfied traveler");
}
else
{
    console.log("needs improvement");
}

//7

let groupSize;
if(groupSize%2==0)
{
    console.log("Even number");
}
else
{
    console.log("Odd number");
}

//8
const age = travelerAge<=12? "child" : travelerAge>20? "adult" : "teen";
console.log(age);

//9
let experienceLevel
const exp= experienceLevel>5 ? console.log("Experienced traveler") : console.log("New traveler"); 

//10

let tripDuration;
if(tripDuration<3)
{
    console.log("Weekend getaway");
}
else if(tripDuration>=3 && tripDuration<=14)
{
    console.log("Standard vacation");
}
else
{
    console.log("Extended tour");
}

//11

let activityAgeREquirement = 18;
if(activityAgeREquirement===travelerAge)
{
    console.log("yes the traveler can participate in the activity");
}
else
{
    console.log("no the traveler can not participate in the activity");
}

//12

let dayOfTravel='';
if(dayOfTravel=='Saturday' || dayOfTravel=='Sunday')
{
    console.log("Special weekend offer availabe!");
}
else 
{
    console.log("Regular pricing");
}

//13

let distinationOpeningYear;
if(distinationOpeningYear>=2001 && distinationOpeningYear<=2100)
{
    console.log(("21st century destination"));
}
else console.log("20th century destination");

//14

let destinationType='';
let destinationRating;
if(destinationType=='Adventure' && destinationRating==8)
{
    console.log("Must visit");
}
else console.log("Check reviews before planning your visit");

//15

let packagePrice;
if (packagePrice<=1000)
{
    console.log("Discounted package");
}
else console.log("Regular package price");

//16

let isAdultActivity;
if(travelerAge>18 || (!isAdultActivity))
{
    console.log("Allowed to participate");
}
else console.log("Age-restricted activity");

//17

let destinationName='';
if(destinationName.includes("famous"))
{
    console.log("This destination is a hotspot");
}
else
{
   console.log("This destination is not a hotspot");
}


