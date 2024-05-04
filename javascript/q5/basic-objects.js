//1
let sum = 0;
const destination = {
  name: 'Rula',
  country: 'New York',
  yearVisited: '2020',
  activities: ['sdsd', 'sdsdsd'],
  ratings: [6, 7, 8, 9],

  getAverageRating: function () {
    for (let i = 0; i < this.ratings.length; i++) {
      sum = sum + this.ratings[i];
    }
    return sum / this.ratings.length;
  },
};
console.log(destination.getAverageRating());

//2
destination.landmarks = [
  { name: 'gogo', description: 'new' },
  { name: 'yoyo', description: 'new1' },
];
console.log(destination);
console.log(destination.activities[1]);
console.log(destination['activities'][1]);
console.log(destination.landmarks[1].name);
console.log(destination['landmarks'][1]['name']);

//3
destination.yearVisited = 2025;
destination.ratings.push(5);
delete destination.country;
console.log(destination);
destination.landmarks[0].description = 'bla bla bla';
destination['landmarks'][0]['description'] = 'bla bla bla';

//4
const destinations = [
  {
    name: 'Eiffel Tower',
    details: {
      visitorsPerYear: 7000000,
      entryFee: '25 USD',
    },
  },
  {
    name: 'Great Wall of China',
    details: {
      visitorsPerYear: 10000000,
      entryFee: '60 CNY',
    },
  },
];
console.log(destinations[0].details.visitorsPerYear);
function avg(destinations) {
  let sum1 = 0;
  for (let i = 0; i < destinations.length; i++) {
    sum1 = sum1 + destinations[i].details.visitorsPerYear;
  }
  return sum1 / destinations.length;
}
console.log(avg(destinations));

//5
const destination1 = {
  name: 'luna',
  country: 'Paris',
  yearVisited: '2023',
  activities: ['papapa', 'lalala'],
  ratings: [6, 7, 8, 9, 2],
};
const newdistination = Object.assign(destination1, ...destinations);
console.log(newdistination);
Object.freeze(destination);
Object.seal(destination);
console.log(Object.isFrozen(destination));
console.log(Object.isSealed(destination));

// 6
const destinationDetails = {
  name: 'Machu Picchu',
  country: 'Peru',
  yearVisited: 2019,
  ratings: [9, 8.5, 9, 9.5],
};
function clg(destinationDetails) {
  for (const key in destinationDetails) {
    console.log(`name:${key}`);
    console.log(`value: ${destinationDetails[key]}`);
  }
}
clg(destinationDetails);

// 7
const destinationRatings = {
  'Machu Picchu': 9,
  'Great Wall of China': 8.5,
  'Eiffel Tower': 7.5,
  Colosseum: 6.5,
};
function increase(destinationRatings) {
  for (const key in destinationRatings) {
    if (destinationRatings[key] < 7) {
      destinationRatings[key] = destinationRatings[key] + 1;
    }
  }
}
increase(destinationRatings);
console.log(destinationRatings);

// 8
const destinations2 = {
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

// 9
const activityRatings = {
  hiking: [9, 8, 10, 7, 8.5],
  sightseeing: [8.5, 8, 9, 9.5, 7.5],
  snorkeling: [7, 7.5, 8, 8.5, 9],
};
function average(activityRatings) {
  const newdistinations = [];
  let sum = 0;
  const entries = Object.entries(activityRatings);
  for (const [id, destination] of entries) {
    for (let i = 0; i < destination.length; i++) {
      sum = sum + destination[i];
    }
    newdistinations.push(id, sum / destination.length);
    sum = 0;
  }
  return newdistinations;
}

console.log(average(activityRatings));
// 10
const destinationAwards = {
  'Machu Picchu': 'Most Visited',
  'Great Wall of China': 'Most Visited',
  'Eiffel Tower': 'Most Photographed',
  Colosseum: 'Most Iconic',
};
function newdes(destinationAwards) {
  const new4 = [];
  let x = '';
  const entries4 = Object.entries(destinationAwards);
  for (const [id, destination] of entries4) {
    new4.push([destination, id]);
  }
  return new4;
}
console.log(newdes(destinationAwards));
