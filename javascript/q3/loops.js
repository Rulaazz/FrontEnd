//1
const activityDurations = [2, 3, 1];
let sum = activityDurations.reduce((a,b)=>a+b);
console.log(sum);

//2
let max=activityDurations.sort((a,b)=>b-a);
let maxelement=max[0];
console.log(maxelement);

//3
let activitiesNames = ['Sightseeing','Hiking', 'Sightseeing'];

activitiesNames.sort();
let count =1;
let max1 =0;
let ele;
for(i=1; i<activitiesNames.length; i++)
{
   if (activitiesNames[i]==activitiesNames[i-1])
   {
   count++;
   }
   else count=1;

   if(count>max1)
   {
   max1 = count;
   ele=activitiesNames[i];
   }

}
console.log(ele + " " +  max1);



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
  transportationTypes5.sort();
  let con=1;
  for(i=1; i<transportationTypes5.length; i++)
{
   if (transportationTypes5[i]!=transportationTypes5[i-1])
   {
   con++;
   }
}
  console.log(con);
  


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
  let arr2=[];
  let sum2=0;
  for(j=0; j<categoryExpenses9.length ; j++)
  {
   sum2=categoryExpenses9[j][0]+categoryExpenses9[j][1];
   arr2.push(sum2);
   sum2=0;
  }
  console.log(arr2);
  
  // 10. Shortest Route in Each Travel Plan
  const routeDistances10 = [
    [120, 300],
    [150, 175],
    [100, 250],
  ];
  let arr3=[];
  let sum3=0;
  for(s=0; s<routeDistances10.length ; s++)
  {
   sum3=routeDistances10[s][0]+routeDistances10[s][1];
   arr3.push(sum3);
   sum3=0;
  }
  let min=arr3.sort((a,b)=>a-b);
  let minelement=min[0];
  console.log(minelement);

  // 11. Average Duration per Activity Type
  const activityDurationsMatrix11 = [
    [2, 3],
    [1, 4],
    [3, 2],
  ];
  let arr4=[];
  let avg=0;
  for(j=0; j<activityDurationsMatrix11.length ; j++)
  {
   avg=(activityDurationsMatrix11[j][0]+activityDurationsMatrix11[j][1])/2;
   arr4.push(avg);
   avg=0;
  }
  console.log(arr4);
  
  // 12. Find the Destination with the Highest Rating in Each Category
  const destinationRatingMatrix12 = [
    [4.5, 4.7],
    [4.8, 4.6],
    [4.9, 5.0],
  ];
  let arr5=[];
  for(j=0; j<destinationRatingMatrix12.length ; j++)
  {
   if(destinationRatingMatrix12[j][0]>destinationRatingMatrix12[j][1])
   {
   arr5.push(destinationRatingMatrix12[j][0]);   
   }
   else
   {
    arr5.push(destinationRatingMatrix12[j][1]);
   }
  }
  console.log(arr5);


  // 13. Count Highly Recommended Destinations in Each Region
  const regionRecommendationMatrix13 = [
    [5, 7],
    [8, 6],
    [9, 7],
  ];
  let cont=0;
  for(j=0; j<regionRecommendationMatrix13.length ; j++)
  {
   if(regionRecommendationMatrix13[j][0]>regionRecommendationMatrix13[j][1] && regionRecommendationMatrix13[j][0]>=7)
   {
   cont=cont+regionRecommendationMatrix13[j][0];   
   }
   else if(regionRecommendationMatrix13[j][1]>regionRecommendationMatrix13[j][0] && regionRecommendationMatrix13[j][1]>=7)
   {
    cont=cont+regionRecommendationMatrix13[j][1];
   }
   }
  
  console.log(cont);

  
  // 14. Sum of Ratings for Must-Visit Destinations by Region
  const mustVisitRatingMatrix14 = [
    [4.5, 4.7],
    [4.9, 5.0],
    [4.8, 4.9],
  ];
  let ar=[];
  let sum4=0;
  for(j=0; j<mustVisitRatingMatrix14.length ; j++)
  {
   if(mustVisitRatingMatrix14[j][0]>4.8 && mustVisitRatingMatrix14[j][1]>4.8)
   {
   sum4= mustVisitRatingMatrix14[j][0]+ mustVisitRatingMatrix14[j][1];
   ar.push(sum4);
   }
  }
  console.log(ar);