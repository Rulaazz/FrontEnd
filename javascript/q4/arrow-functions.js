// 1. Simple Arrow Function Conversion
const getDestinationName = (destination) => destination.name;

// 2. Control Flow in Arrow Functions
const getTravelStatus = (status) => {
  status === 'Visited'
    ? 'You have visited this place'
    : status === 'Upcoming'
    ? 'You are planning to visit this place'
    : 'This place is in your wishlist';
};

// 3. Arrow Functions with Multiple Operations
const getTotalBudget = (destinations) => {
  let totalBudget = 0;
  for (let i = 0; i < destinations.length; i++) {
    totalBudget += destinations[i].budget;
  }
  return 'Total travel budget is ' + totalBudget;
};

// 4. Arrow Functions as Callbacks
let destinations = [];
const sortedDestinations = destinations.sort((a, b) => b.budget - a.budget);

// 5. Implicit Return with Arrow Functions
const getDestinationNames = (destinations) =>
  destinations.map((destination) => destination.name);
