// 1. City Name Capitalization
// Input: "new york"
let CityName="new york";
let currentname=CityName.split(" ");
let newname=[];
for(i=0; i<currentname.length; i++)
{
    let c = currentname[i].slice(0,1).toUpperCase();
    newname.push(c);
    newname.push(currentname[i].slice(1));
    newname.push(" ");
}
let newname1=newname.join("");
console.log(newname1)

// 2. Flight Search
// Input: ["New York", "Tokyo", "Paris", "London"] and query "yo"
const arr=["New York", "Tokyo", "Paris", "London"];

for(i=0; i<arr.length; i++)
{
if(arr[i].includes("yo") || arr[i].includes("Yo"))
{
    console.log(arr[i]);
}

}
// 3. Flight Code Format
// Input: "JFK-123"
let  FlightCodeFormat="JFK-123";
let newFlightCodeFormat=FlightCodeFormat.split("-");
let newarray=[];
newarray.push(newFlightCodeFormat[1]);
newarray.push(newFlightCodeFormat[0]);
let FlightCode=newarray.join("-");
console.log(FlightCode);



// 4. Flight Duration
// Input: "3h 45min"
let  FlightDuration="3h 45min";
let newTime=FlightDuration.split(" ");
console.log(parseInt(newTime[0]) + " houres " + "and " +parseInt(newTime[1])+ " minutes ");


// 5. Travel Agency Acronym
// Input: "Global Travel Agency"
let TravelAgencyAcronym= "Global Travel Agency";
let arr1=TravelAgencyAcronym.split(" ");
let newAcronym=[];
for(i=0; i<arr1.length; i++)
{
    let char = arr1[i].charAt(0);
    newAcronym.push(char);
}
let newAcronym1=newAcronym.join("");
console.log(newAcronym1);


// 6. Location Slug
// Input: "San Francisco"
let LocationSlug="San Francisco";
let newLocationSlug=LocationSlug.split(" ");
let TheLocationSlug=newLocationSlug.join("-");
console.log(TheLocationSlug);



// 7. Itinerary Trimming
// Input: "Visit the Golden Gate Bridge, take a walk in Golden Gate Park, see Alcatraz Island", 50
let ItineraryTrimming="Visit the Golden Gate Bridge, take a walk in Golden Gate Park, see Alcatraz Island";
let max=50;
for(i=0; i<ItineraryTrimming.length;i++)
{
    if(ItineraryTrimming.slice(max-1,max)==' '|| ItineraryTrimming.slice(max,max+1)==' ')
    {
        console.log(ItineraryTrimming.slice(0,max) + "...");
        break;
    }
    else
    {
     max++;
    }

}


// 8. Travel Wishlist
// Input: "Paris, Tokyo, New York"
let ListString = "Paris, Tokyo, New York";
let array=ListString.split(",");
console.log(array);

///try
