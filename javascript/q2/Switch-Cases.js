//1
let dayOfWeek=3;
switch (dayOfWeek) {
  case 1:
    dayOfWeek = 'Take a Mule Ride';
    break;
  case 2:
    dayOfWeek = 'MonGo Whitewater Rafting day';
    break;
  case 3:
    dayOfWeek = 'Rock climbing';
    break;
  case 4:
    dayOfWeek = 'Bungee jumping';
    break;
  case 5:
    dayOfWeek = 'Skydiving';
    break;
  case 6:
    dayOfWeek = 'Kayaking';
    break;
  case  7:
    dayOfWeek = 'Sastay in hotel';
}
console.log( dayOfWeek);

//2
let themeColor='sea';
switch (themeColor) 
{
  case 'sea':
    console.log(themeColor);
    break;
  case 'dark':
    console.log(themeColor);
    break;
  case 'light':
    console.log(themeColor);
    break;
  default :
    console.log(themeColor);
    break;
}

//3
let notificationStatus='new';
switch (notificationStatus) 
{
  case 'new':
    console.log("You have new travel notification!");
    break;
  case 'unread':
    console.log("You have new travel notification!");
    break;
  case 'unopened':
    console.log("You have new travel notification!");
    break;
 default:
    console.log("read");
    break;
}

//4

let packageRating='Basic';
switch (packageRating) 
{
  case 'Basic':
    console.log("You have basic travel!");
    break;
  case 'Standard':
    console.log("You have standard travel!");
    break;
  case 'Premium':
    console.log("You have premium travel!");
    break;
  case 'Luxury':
    console.log("You have luxury travel!");
    break;
}

//5

let mealPlan='Dinner';
switch (mealPlan) 
{
  case 'Breakfast':
    console.log("Breakfast");
  
  case 'Lunch':
    console.log("Lunch");
   
  case 'Dinner':
    console.log("Dinner");
  
}

//6
let satisfactionScore=10;
switch (true) 
{
  case satisfactionScore>=90 :
    console.log("Highly satisfid");
    break;
  case satisfactionScore>=70 && satisfactionScore<90:
    console.log("satisfied");
    break;
  case satisfactionScore<70 && satisfactionScore>0:
    console.log("Neutral");
    break;
  case satisfactionScore=0:
    console.log("Dissatisfied");
    break;
}

//7

let travelMonth=3;
switch (travelMonth) {
  case 1:
    travelMonth = 'winter';
    break;
  case 2:
    travelMonth = 'winter';
    break;
  case 3:
    travelMonth = 'spring';
    break;
  case 4:
    travelMonth = 'spring';
    break;
  case 5:
    travelMonth = 'spring';
    break;
  case 6:
    travelMonth = 'summer';
    break;
  case  7:
    travelMonth = 'summer';
  case 8:
    travelMonth = 'summer';
    break;
  case 9:
    travelMonth = 'fall';
    break;
  case 10:
    travelMonth = 'fall';
    break;
  case 11:
    travelMonth = 'fall';
    break;
  case 12:
    travelMonth = 'winter';
    break;
}
console.log(travelMonth);

//8

let travelSeason=9;
switch (travelSeason/3) {
  case 1:
   console.log('Winter Advisory');
    break;
  case 2:
   console.log('Spring  Advisory');
    break;
  case 3:
   console.log('Summer Advisory');
    break;
  case 4:
   console.log('Fall Advisory');
    break;
  
}