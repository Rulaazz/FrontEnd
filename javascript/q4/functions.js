//1
let travelDestinations;
function initializeDestinations(arr) {
  travelDestinations = [];
}
initializeDestinations();
console.log(travelDestinations);
//2
function addDestination(destinationName, travelDate) {
  travelDestinations.push([destinationName, travelDate]);
}
addDestination('new york', '2024-06-25');
addDestination('paris', '2024-05-15');
addDestination('london', '2024-05-02');
console.log(travelDestinations);

//3
function findTravelDate(destinationName) {
  let y = '';
  for (let i = 0; i < travelDestinations.length; i++) {
    if (
      travelDestinations[i][0] == destinationName &&
      travelDestinations[i][1] != ''
    ) {
      y = travelDestinations[i][1];
    }
  }
  if (y != '') {
    console.log(y);
  } else console.log('Destination is not found');
}
findTravelDate('london');
//4
function updateTravelDate(destinationName, newTravelDate) {
  for (let i = 0; i < travelDestinations.length; i++) {
    if (travelDestinations[i][0] == destinationName) {
      travelDestinations[i][1] = newTravelDate;
      break;
    } else console.log('Destination is not found');
  }
}

updateTravelDate('new york', '2024-06-26');
console.log(travelDestinations);

//5
function removeDestination(destinationName) {
  for (let i = 0; i < travelDestinations.length; i++) {
    if (travelDestinations[i][0] == destinationName) {
      travelDestinations[i].pop();
      travelDestinations[i].pop();
      break;
    } else console.log('Destination is not found');
  }
}
removeDestination('new york', '2024-06-26');
console.log(travelDestinations);

//6
function listDestinations() {
  for (let i = 0; i < travelDestinations.length; i++) {
    console.log(
      'Destination name ' +
        travelDestinations[i][0] +
        ' Distination date ' +
        travelDestinations[i][1]
    );
  }
}
listDestinations();

//7
function findNextDestination() {
  let todaydate = new Date();
  let closesdate = null;
  let nextdistination = '';
  for (let i = 0; i < travelDestinations.length; i++) {
    const destinationDate = new Date(travelDestinations[i][1]);
    if (
      destinationDate > todaydate &&
      (!closesdate || destinationDate < closesdate)
    ) {
      closesdate = destinationDate;
      nextdistination = travelDestinations[i][0];
      debugger;
    }
  }
  if (nextdistination) {
    console.log(nextdistination);
  } else {
    console.log('Destination is not found');
  }
}
findNextDestination();
