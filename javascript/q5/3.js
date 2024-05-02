/*const destinations2 = {
  1: { name: 'Machu Picchu', yearVisited: 2019, rating: 9 },
  2: { name: 'Stonehenge', yearVisited: 2010, rating: 8.5 },
  3: { name: 'Great Wall of China', yearVisited: 2018, rating: 8.6 },
};

function distinationvisitedyear(destinations2) {
  const newdistinations = [];
  const entries = Object.entries(destinations2);
  for (const [id, destination] of entries) {
    if (destination.yearVisited > 2015) {
      const newDestination = {
        ...destination,
        id,
        isNewer: true,
      };
      newdistinations.push(newDestination);
    }
  }
  return newdistinations;
}

console.log(distinationvisitedyear(destinations2));
*/

const destination1 = [
  {
    name: 'Rula',
    country: 'New York',
    yearVisited: '2020',
    ratings: [6, 7, 8, 9],
  },
  {
    name: 'hgiloja',
    country: 'New York',
    yearVisited: '2020',
    ratings: [6, 7, 8, 9],
  },
  {
    name: 'iok;',
    country: 'New York',
    yearVisited: '2020',
    ratings: [6, 7, 8, 9],
  },
  {
    name: 'jio',
    country: 'New York',
    yearVisited: '2020',
    ratings: [6, 7, 8, 9],
  },
  {
    name: 'asdf',
    country: 'New York',
    yearVisited: '2020',
    ratings: [6, 7, 8, 9],
  },
  {
    name: 'aaaula',
    country: 'New York',
    yearVisited: '2020',
    ratings: [6, 7, 8, 9],
  },
];

function sortfun(destination1) {
  return destination1.name.sort((a, b) => b - a);
}
console.log(sortfun(destination1));
