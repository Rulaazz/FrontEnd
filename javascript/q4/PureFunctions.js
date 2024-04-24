// Pure Functions

// 1. Determine the Average Rating of Trips
// Input: [8.5, 7.9, 6.3, 9.2, 8.1]
function calculateAverageRating(arr) {
  let avg = 0;
  for (i = 0; i < arr.length; i++) {
    avg = avg + arr[i];
  }
  return avg / arr.length;
}
let x = [8.5, 7.9, 6.3, 9.2, 8.1];
console.log(calculateAverageRating(x));

// 2. Extract Organizer Names from Trip Names
// Input Example: ['Europe Exploration (2020) - Organized by Wanderlust Travel', 'Asian Adventure (2019) - Organized by Globe Trotters', 'Caribbean Cruise (2022) - Organized by Cruise Experts']
function extractOrganizerNames(nametrip) {
  let arr = [];
  for (i = 0; i < nametrip.length; i++) {
    let a = nametrip[i].slice(nametrip[i].lastIndexOf('by'));
    arr.push(a.slice(2));
  }
  return arr;
}
let nametrip = [
  'Europe Exploration (2020) - Organized by Wanderlust Travel',
  'Asian Adventure (2019) - Organized by Globe Trotters',
  'Caribbean Cruise (2022) - Organized by Cruise Experts',
];
console.log(extractOrganizerNames(nametrip));
// 3. Check if a Trip Title Contains a Specific Word
// Input: ('European Adventure', 'Europe')
function containsWordInTitle(triptitle, keyword) {
  if (triptitle.includes(keyword)) {
    return true;
  } else {
    return false;
  }
}
let triptitle = 'European Adventure';
let keyword = 'Europe';
console.log(containsWordInTitle(keyword));
// 4. Check if All Trip Titles Start with the Same Letter
// Input: ['Paris Getaway', 'Prairie Expedition', 'Portugal Experience']
function allTitlesStartWithSameLetter(triptitles) {
  let c = triptitles[0].slice(0, 1);
  for (i = 1; i < triptitles.length; i++) {
    if (c != triptitles[i].slice(0, 1)) {
      return false;
    }
  }
  return true;
}
let triptitles = ['Paris Getaway', 'Prairie Expedition', 'Portugal Experience'];
console.log(allTitlesStartWithSameLetter(triptitles));
// 5. Concatenate All Trip Types into a Single String
// Input: ['City', 'Beach', 'Mountain', 'Cruise']
function concatenateType(trip) {
  let arraytrip = trip.join(', ');
  return arraytrip;
}
let trip = ['City', 'Beach', 'Mountain', 'Cruise'];
console.log(concatenateType(trip));

// 6. Check if Any Trip Title is Longer Than 15 Characters
// Input: ['European Adventure', 'Exploring Asia', 'African Safari']
function anyTitleLongerThanFifteenChars(char) {
  for (i = 0; i < char.length; i++) {
    let d = char[i].split('');
    if (d.length > 15) {
      return true;
    }
  }
  return false;
}
let char = ['European Adventure', 'Exploring Asia', 'African Safari'];
console.log(anyTitleLongerThanFifteenChars(char));

// 7. Find Trips Organized by a Specific Organizer
// Input Example: ['European Adventure', 'Asian Expedition', 'Caribbean Cruise'], ['Wanderlust Travel', 'Globe Trotters', 'Cruise Experts'], 'Wanderlust Travel'
function findTripsByOrganizer(
  arraytriptitle,
  arraycorrespondingorganizers,
  correspondingorganizers
) {
  for (let i = 0; i < arraytriptitle.length; i++) {
    if (arraycorrespondingorganizers[i] == correspondingorganizers) {
      return arraytriptitle[i];
    }
  }
}
const arraytriptitle = [
  'European Adventure',
  'Asian Expedition',
  'Caribbean Cruise',
];
const arraycorrespondingorganizers = [
  'Wanderlust Travel',
  'Globe Trotters',
  'Cruise Experts',
];
const correspondingorganizers = 'Wanderlust Travel';
console.log(
  findTripsByOrganizer(
    arraytriptitle,
    arraycorrespondingorganizers,
    correspondingorganizers
  )
);

// 8. Capitalize the First Letter of Each Trip Title
// Input: ['european adventure', 'asian expedition', 'caribbean cruise']
function capitalizerFirstLetter(triptitl) {
  let arr = [];
  for (let j = 0; j < triptitl.length; j++) {
    let newname = triptitl[j].split(' ');
    let capital = '';
    for (i = 0; i < newname.length; i++) {
      const capitalize = newname[i];
      capital += capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
      if (i < capitalize.length - 1) {
        capital += ' ';
      }
    }
    arr.push(capital);
  }

  return arr;
}

let triptitl = ['european adventure', 'asian expedition', 'caribbean cruise'];
console.log(capitalizerFirstLetter(triptitl));
