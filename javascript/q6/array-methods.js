1; //
arrayDestinations = ['New York', 'London', 'Paris'];
const newarrayDestinations = arrayDestinations.map(function (
  arrayDestinations
) {
  return arrayDestinations;
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
const flightDestinations = flightobjects.filter(
  (b) => b.destination == destination
);

console.log(flightDestinations);

//3 not complete
const arrayflight = [
  { duration: '3h 30m' },
  { duration: '2h 45m' },
  { duration: '1h 15m' },
];

const getFlightDurationInSeconds = (duration) => {
  const [hours, minutes] = duration.split('h ');
  return parseInt(hours) * 3600 + parseInt(minutes) * 60;
};
function myFunc(total, num) {
  return total + num;
}
const CalculateDestinations = arrayflight.map(function (arrayflight) {
  {
    return getFlightDurationInSeconds(arrayflight.duration);
  }
});
console.log(CalculateDestinations);

//4

const flitDetails = [
  { flightNumber: 'FL001', destination: 'New York' },
  { flightNumber: 'FL002', destination: 'London' },
];

const arrayflitDetails = flitDetails.map(function (flitDetails) {
  {
    return [flitDetails.flightNumber + '-' + flitDetails.destination];
  }
});
console.log(arrayflitDetails);

//5
let flightObjects = [
  { flightNumber: 'FL001', duration: '3h 30m' },
  { flightNumber: 'FL002', duration: '2h 45m' },
];
const newDuration = '4h 15m';
const flightNumber1 = 'FL001';

flightObjects.every((b) => {
  b.flightNumber = flightNumber1;
  b.duration = newDuration;
});
console.log(flightObjects);

//6
function calculation(duration) {
  const [hours, minutes] = duration.split('h ');
  return parseInt(hours) * 60 + parseInt(minutes);
}
const timeDuration = [
  { duration: '3h 30m' },
  { duration: '2h 45m' },
  { duration: '1h 15m' },
];
const minDuration = 180;
const newtime = timeDuration.map((b) => {
  if (calculation(b.duration) > minDuration) return b.duration;
  else return '';
});
console.log(newtime);

//7
let newFlight = [
  { flightNumber: 'FL001' },
  { flightNumber: 'FL002' },
  { flightNumber: 'FL003' },
];

const newFlightObject = newFlight.map(function (b) {
  return b.flightNumber;
});
console.log(newFlightObject);

//8 not complete

const arrayflight1 = [
  { duration: '3h 30m' },
  { duration: '2h 45m' },
  { duration: '1h 15m' },
];

const getFlightDurationInSeconds1 = (duration) => {
  const [hours, minutes] = duration.split('h ');
  return parseInt(hours) * 3600 + parseInt(minutes) * 60;
};
//let sortDistination = console.log(sortDistination);

//9
const destinationflight = [
  { destination: 'New York' },
  { destination: 'London' },
  {
    destination: 'Paris',
  },
];

const newdestinationFlight = destinationflight.map(function (b) {
  return b.destination;
});
console.log(newdestinationFlight);
