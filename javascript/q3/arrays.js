//1
const travelItinerary = ["Paris" , "Tokyo" , "New York City"];
let destinationToCheck = "Tokyo";
if(travelItinerary.includes(destinationToCheck))
{
    console.log("yes it is exists");
}

//2
const travelDates = ["2023-07-01" , "2023-07-15" , "2023-08-01"];
const array = travelDates.reverse();
console.log(array);

//3
const travelActivities = ["Sightseeing" , "Hiking" , "Dining"];
const array2 = travelActivities.join(" ");
console.log(array2);

//4
let activityToCheck= "Hiking";
if(travelActivities.includes(activityToCheck))
{
    console.log("yes it is includes");
}

//5
const destinationList = ["Paris" , "Tokyo" , "New York City"];
let specificDestination = "New York City";
if(destinationList.includes(specificDestination))
{
    console.log("New York City found at index X");
}
else 
{
    console.log("Destination not found");
}

//6 
let upcomingTrips = ["Greece" , "Iceland" , "Japan"];
 upcomingTrips.pop();
console.log(upcomingTrips);

//7
let buketListDestinations = ["Machu Picchu" , "Great Wall of China"];
const newDistination = "Australis in Antarctica";
buketListDestinations.push(newDistination);
buketListDestinations.reverse();
console.log(buketListDestinations);

//8
let europeanCapitals = ["Paris", "Berlin" , "Madrid"];
europeanCapitals.shift([0]);
console.log(europeanCapitals);

//9
const beachDestinations = ["MAldives" , "Bora Bora"];
const cityDEstinations = ["New York" , "Tokyo"];
let array3=beachDestinations.concat(cityDEstinations);
console.log(array3);

//10
let array4 = destinationList.sort();
console.log(array4);

//11
let packingListString = "Passport,Sunscreen,Camera"
let array5=packingListString.split(",");
console.log(array5);

//12
const tripItinerary = ["Visit Louvre" , "Eiffel Tower" , "Seine River Cruise"];
const n=2;
let array6=tripItinerary.slice(0,n);
console.log(array6);

//13
let travelWishlist= ["Northern Lights in Norway" , "Safari in Kenya" , "Great Barrier Reef"];
let arr=travelWishlist;
travelWishlist=[];
console.log(travelWishlist);

//14
let destinations = ["Paris", "Tokyo"];
const newDestination= "New York City";
destinations.unshift(newDestination);
console.log(destinations);

//15
let arr1=destinations;
arr1.shift();
console.log(arr1);

//16
const destinations1=["Paris", "Tokyo","New York City"]
const arr2 = destinations1.join(" ");
console.log(arr2);

17//
const destinationToFind = "Tokyo";
let num=destinations1.lastIndexOf(destinationToFind);
console.log(num);

//18
const arr3 = destinations1.sort();
console.log(arr3);

//19
let distances = [500, 150, 300, 200];
distances.sort();
console.log(distances);