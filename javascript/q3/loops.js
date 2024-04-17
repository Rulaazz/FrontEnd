//1
const activityDurations = [2, 3, 1];
let sum = activityDurations.reduce((a,b)=>a+b);
console.log(sum);

//2
let max=activityDurations.sort((a,b)=>b-a);
let maxelement=max[0];
console.log(maxelement);

//3
let activitiesNames = ["Sightseeing" , "Hiking" , "Sightseeing"];
let arr=activitiesNames.sort((a,b)=>a-b);
let count =1;
let max1 =0;
let ele
/*for(i=1; i<activitiesNames.length; i++)
{
   if (activitiesNames[i]==activitiesNames[i-1])
   {
   count++
   }
   else count=1;

   if(count>max1)
   max1 = count;
   ele=activitiesNames[i];

}
console.log(ele + count);*/
console.log(arr);


//4
let short=activityDurations.sort((a,b)=>a-b);
let shortelement=short[0];
console.log(shortelement);


// 5. Count Travel Segments by Transportation Type
const transportationTypes5 = [
    'Car',
    'Train',
    'Car',
    'Flight',
  ];
  
  // 6. Average Travel Expense
  const travelExpenses6 = [50, 100, 75, 125, 200];
  let sum1 = (travelExpenses6.reduce((a,b)=>a+b))/travelExpenses6.length;
  console.log(sum1);
  
  // 7. Highest Single Travel Expense
  const travelExpenses7 = [50, 100, 75, 125, 200];
  let max3=travelExpenses7.sort((a,b)=>b-a);
  let maxelement1=max3[0];
  console.log(maxelement1);


  // 8. Expenses Under Budget
  const travelExpenses8 = [50, 100, 75, 125, 200];
  let count2=0;
  for(i=0; i<travelExpenses8.length; i++)
  {
    if(travelExpenses8[i]<150)
    {
        count2++;
    }
  }
  console.log(count2);
  
  // 9. Calculate Total Expenses for Each Category
  const categoryExpenses9 = [
    [100, 200],
    [150, 175],
    [120, 250],
  ];
  
  // 10. Shortest Route in Each Travel Plan
  const routeDistances10 = [
    [120, 300],
    [150, 175],
    [100, 250],
  ];
  
  // 11. Average Duration per Activity Type
  const activityDurationsMatrix11 = [
    [2, 3],
    [1, 4],
    [3, 2],
  ];
  
  // 12. Find the Destination with the Highest Rating in Each Category
  const destinationRatingMatrix12 = [
    [4.5, 4.7],
    [4.8, 4.6],
    [4.9, 5.0],
  ];
  
  // 13. Count Highly Recommended Destinations in Each Region
  const regionRecommendationMatrix13 = [
    [5, 7],
    [8, 6],
    [9, 7],
  ];
  
  // 14. Sum of Ratings for Must-Visit Destinations by Region
  const mustVisitRatingMatrix14 = [
    [4.5, 4.7],
    [4.9, 5.0],
    [4.8, 4.9],
  ];
  