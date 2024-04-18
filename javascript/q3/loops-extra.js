// 1. Calculate Total Travel Time
const destinations1 = [
    [ 'name: Paris', 'distance: 500' , 'speed: 50' ],
    ['name: London', 'distance: 200', 'speed: 70' ],
    ['name: New York','distance: 3000','speed: 500']
  ];
  let sum=0;
  let array2=[];
  for(i=0; i<destinations1.length; i++)
  {
  let a=destinations1[i][1];
  let array1=a.split(" ");
  array2.push(array1[1]);
  }
  for(j=0; j<array2.length; j++)
  {
   sum=sum+Number(array2[j]);
  }
  console.log(sum);

  // 2. Find Longest Travel Route
const destinations2 = [
    {
      name: 'Paris',
      routes: [
        { name: 'Route 1', distance: 300 },
        { name: 'Route 2', distance: 250 },
      ],
    },
    {
      name: 'London',
      routes: [
        { name: 'Route 1', distance: 200 },
        { name: 'Route 2', distance: 280 },
      ],
    },
  ];
   // const object={name: "Route 1", distance: 200}
   let longestRoute = { name: "", distance: 0 };
  
  for(i=0; i<destinations2.length; i++)
  {
    for(j=0; j<destinations2[i].routes.length; j++)
    {
       if(destinations2[i].routes[j].distance > longestRoute.distance)
       {
        longestRoute = destinations2[i].routes[j];
       }
    }
 
 }
 console.log(longestRoute); 
  




  // 3. Sort Destinations by Distance
  const destinations3 = [
    {
      name: 'Paris',
      routes: [
        { distance: 300 },
        { distance: 250 },
      ],
    },
    {
      name: 'London',
      routes: [
        { distance: 200 },
        { distance: 280 },
      ],
    },
  ];
  
   console.log(destinations3);

   for(i=0; i<destinations3.length; i++)
  {
  
  let sum1=0;
    for(j=0; j<destinations3[i].routes.length; j++)
    {
       sum1+=destinations3[i].routes[j].distance;
       
    }
    destinations3[i].sum1 = sum1;
 }
destinations3.sort((a, b) => b.sum1 - a.sum1);
console.log(destinations3);


  // 4. Travel Itinerary
  const destinations4 = [
    { name: 'Paris', connections: ['London'] },
    { name: 'London', connections: ['New York'] },
    { name: 'New York', connections: [] },
  ];
  //const start4 = 'Paris';
  let array0=[];
  for(i=0; i<destinations4.length; i++)
  {
    array0.push(destinations4[i].name);
  }
console.log(array0);

  // 5. Least Number of Connections
  const destinations5 = [
    {
      name: 'Paris',
      connections: ['London', 'New York'],
    },
    { name: 'London', connections: ['New York'] },
    { name: 'New York', connections: [] },
  ];

let element=destinations5[0].name;
let min=destinations5[0].connections.length;

  for(i=0; i<destinations5.length; i++)
{
    let count=0;
    count=destinations5[i].connections.length;
   
    if (count<min)
    {
        min=count;
        element=destinations5[i].name;
    } 
    
}
console.log(element); 
