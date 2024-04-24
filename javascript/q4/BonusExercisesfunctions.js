// Bonus Exercises

// 1. Sort Destination Ratings
// Input: [4, 2, 5, 3, 1]

function sortDestinationRatings(array) {
  return array.sort();
}
let array = [4, 2, 5, 3, 1];
console.log(sortDestinationRatings(array));

// 2. Average Rating of Top N Destinations
// Input: ([2, 3, 5, 4, 1], 3)
function AverageRatingofTop(arr, top) {
  let sum = 0;
  arr.sort().reverse();
  for (let i = 0; i < top; i++) {
    sum = sum + arr[i];
  }
  sum = sum / top;
  return sum;
}
let top = 3;
let arr = [2, 3, 5, 4, 1];
console.log(AverageRatingofTop(arr, top));

// 3. Create Rating Frequency Map for Destinations
// Input: [3, 4, 3, 5, 4, 5, 5]
function RatingFrequencyMap(arr2) {
  arr2.sort();
  let newarr = [];
  let count = 1;
  console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == arr2[i + 1]) {
      count++;
    } else {
      newarr.push([arr2[i], count]);
      count = 1;
    }
  }
  return newarr;
}
let arr2 = [3, 4, 3, 5, 4, 5, 5];
console.log(RatingFrequencyMap(arr2));

// 4. Normalize Destination Ratings
// Input: ([1, 2, 3, 4, 5], 0, 100)
function NormalizeDestinationRatings(array2, min, max) {
  const newarray2 = [];
  const maximum = array2.sort((a, b) => b - a)[0];
  const minimum = array2.sort((a, b) => a - b)[0];
  const x1 = maximum - minimum;
  for (let i = 0; i < array2.length; i++) {
    newarray2.push(min + ((array2[i] - minimum) / x1) * (max - min));
  }
  return newarray2;
}
let array2 = [1, 2, 3, 4, 5];
let x1 = 0;
let x2 = 100;
console.log(NormalizeDestinationRatings(array2, x1, x2));
