1; //
arrayDestinations = ['New York', 'London', 'Paris'];
const newarrayDestinations = arrayDestinations.map(function (
  arrayDestinations
) {
  {
    return arrayDestinations;
  }
});
console.log(newarrayDestinations);

//2
const flightobjects = [
  { destination: 'New York' },
  { destination: 'London' },
  {
    destination: 'Paris',
  },
];

const destination = 'London';
const flightDestinations = flightobjects.map(function (
  flightobjects,
  destination
) {
  {
    for (const key in flightobjects) {
      if (flightobjects[key] == destination) {
        return flightobjects[key];
      }
    }
  }
});
console.log(flightDestinations);

//3
const arrayflight = [
  { duration: '3h 30m' },
  { duration: '2h 45m' },
  { duration: '1h 15m' },
];

const getFlightDurationInSeconds = (duration) => {
  const [hours, minutes] = duration.split('h ');
  return parseInt(hours) * 3600 + parseInt(minutes) * 60;
};

console.log(getFlightDurationInSeconds);

//4
const flitDetails = [
  { flightNumber: 'FL001', destination: 'New York' },
  { flightNumber: 'FL002', destination: 'London' },
];

let arrayflitDetails = [];
for (const key of flitDetails) {
  arrayflitDetails.push(key.flightNumber + '-' + key.destination);
}
console.log(arrayflitDetails);

//5
[
  { flightNumber: 'FL001', duration: '3h 30m' },
  { flightNumber: 'FL002', duration: '2h 45m' },
];
const newDuration = '4h 15m';
const flightNumber = 'FL001';
