'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex]], this.mainMenu[mainIndex];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngre, ...otherIngre) {
    console.log(mainIngre);
    console.log(otherIngre);
  },
};

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

/*
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
// console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
// console.log(open, close);

// Spread operator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(...newMenu);

// Join two arrays together
const menuAll = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuAll);

// Iderables are arrays, string, maps, sets, NOT OBJECTS
const str = 'jonas';
const letters = [...str];
// console.log(letters);

const ingredients = [
  // prompt("Let's make pasta! Ingrediens 1?"),
  // prompt("Let's make pasta! Ingrediens 2?"),
  // prompt("Let's make pasta! Ingrediens 3?"),
];
// restaurant.orderPasta(...ingredients);

// Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]; // [1, 2, 3, 4]
//REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2, [3, 4, 5]

// Objects
const { sat, ...otherDays } = restaurant.openingHours;
console.log(otherDays);

// Functions

//rest pattern
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(5, 6, 7, 8);
const x = [2, 3, 4, 5];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'cheese');

// || operator
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests1 = restaurant.numGuests || 10;
// console.log(guests1);

// && operator
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// OR Logical Assignment Operator
// Adding numGuest to rest who doesnt have them
const rest1 = {
  name: 'capri',
  numGuest: 20,
};
const rest2 = {
  name: 'pizz',
  owner: 'pedro',
};

rest2.numGuest = rest2.numGuest || 10;
rest1.numGuest ||= 10;
// Nullish Assignment Operator ( ??= )
// rest1.numGuest ??= 10;

console.log(rest1);
console.log(rest2);


// CHALLENGE 1#

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    console.log(players);
    console.log(`${players.length} were scored.`);
  },
};



const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);
team1 > team2 && console.log('Team 2 is more likely to win'); // falsy value
team1 < team2 && console.log('Team 1 is more likely to win');


// Looping in array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
for (const [numElement, element] of menu.entries()) {
  console.log(`${numElement}: ${element}`);
}



//optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  // console.log(restaurant.openingHours.mon.open);

  //with iptional chaining
  console.log(restaurant.openingHours.mon?.open); // only if mon exist, then it will read after - it will be undefined not error
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day); // mon, tue, wed...
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // exp: restaurant.openingHours[mon]
  console.log(`on ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");

// Arrays
const users = [{ name: 'jonas', email: 'gmail.com' }];
console.log(users[0]?.name ?? 'user array empty');



// Looping objects keys
const properties = Object.keys(openingHours); // ["thu","fri","sat"]
console.log(`We are open ${properties.length} days a week`); // We are open 3 days a week
let openStr = `We are open ${properties.length} days:`;
for (const day of Object.keys(openingHours)) {
  // console.log(day); // thu, fri, sat
  openStr += ` ${day}, `;
}
console.log(openStr); // We are open 3 days: thu,  fri,  sat,

// Looping values
const values = Object.values(openingHours); // [0: {open: 12, close: 22}, 1: ...]
// Entire object
const entries = Object.entries(openingHours); //[0: (2) ['thu', {…}], 1: ...]
console.log(entries);

for (const x of entries) {
  console.log(x); // [0: "thu", 1: {open: 12, close: 22}]
}
//  [key,   value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`); // On thu we open at 12 and close at 22
}



// Challenge 2

const entries = Object.entries(game.scored);
// console.log(entries); // 0: (2) ['0', 'Lewandowski']

for (const [i, player] of game.scored.entries()) {
  console.log(i, player);
  console.log(`Goal ${i + 1}: ${player}`);
}

const odds = Object.values(game.odds);
let avrScore = 0;
for (const number of odds) avrScore += number;
console.log((avrScore /= odds.length));

for (const [team, odd] of odds) {
  // console.log(team);
  const string = team === 'x' ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${string}: ${odd}`);
}

// Bonus: Create an object
const scorers = {};

for (const players of game.scored) {
  scorers[players] = (scorers[players] || 0) + 1;
}

console.log(scorers);



// set data structure - are still iterables

const ordersSet = new Set([
  'paste',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(ordersSet); // {'paste', 'pizza', 'risotto', 'pasta'}
// example

const staff = ['waiter', 'chef', 'water', 'maneger', 'chef', 'waiter'];
// const staddUnique = new Set(staff); // {'waiter', 'chef', 'water', 'maneger'}
const staddUnique = [...new Set(staff)]; // ['waiter', 'chef', 'water',
console.log(new Set('plemenitas').size); // 9

// maps
const rest = new Map();
rest
  .set('Name', 'Classico Italiano')
  .set(1, 'Italy')
  .set(2, 'Potrugal')
  .set('categories', ['italian', 'vegeterian', 'organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);
console.log(rest.get(true));

const time = 23;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr)); // test

rest.set(document.querySelector('h1'), 'Heading');

const question = new Map([
  // ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

convert object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

map iteration

Quize app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (key === 'number') console.log(`Anwser${key}: ${value}`);
}
const answer = Number(prompt('Your anwser'));

console.log(question.get(question.get('correct') === answer)); // 3 === anwser

Convert map to array

console.log([...question]);
console.log(...question.entries());
console.log(...question.keys());
console.log([...question.values()]);



// challenge 3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())]; // ['⚽️ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card']
gameEvents.delete(64);

const minutes = [...new Set(gameEvents.keys())].pop();
console.log(
  `An event happened,on average, every ${minutes / gameEvents.size} minutes`
);

for (const [minutes, event] of gameEvents.entries()) {
  const half = minutes <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minutes}: ${event}`);
}

*/

// Working with strings

const airline = 'Tap Air Portugal';
const plane = 'A320';

// console.log(plane[0]); // A
// console.log(plane[1]); // 3
// console.log(plane.length); // 4

// console.log(airline.slice(-3)); // gal
// console.log(airline.slice(3, 7)); //Air
// console.log(airline.slice(0, airline.indexOf(' '))); // Tap
// console.log(airline.slice(airline.lastIndexOf(' '))); //Portugal

// console.log(airline.slice(1, -1)); // ap Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E middle seats
//   const s = seat.slice(-1);
//   // console.log(s);
//   if (s === 'B' || s === 'E') {
//     console.log('Your seat is in the midzdle');
//   } else {
//     console.log('Your seat is not in the middle');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas').slice(3));

// const passenger = 'joNas';
// const passengerLower = passenger.toLowerCase();

// const priceGB = '234,92£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passenger come to the boarding door 23. Boarding door 23';
// console.log(announcement.replace('door', 'gate')); // All passenger come to the boarding gate 23. Boarding door 23
// console.log(announcement.replaceAll('door', 'gate')); // All passenger come to the boarding gate 23. Boarding gate 23

// // practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('you are not allowed on board');
//   } else {
//     console.log('welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
// const [firstNeme, lastName] = 'Anja Plemenitas'.split(' ');
// console.log(firstNeme);

// const newName = ['Miss.', firstNeme, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   // console.log(names);
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('anja plemenitas');
// capitalizeName('maria louise varga');

// const message = 'Go to gate 32!';
// console.log(message.padEnd(22, '='));

// const maskCreditCard = function (number) {
//   const str = number + ''; // "1234565432123456"
//   const lastNumbers = str.slice(-4); // 5678
//   console.log(lastNumbers.padStart(str.length, '*'));
// };

// maskCreditCard(4567876543345678);
// maskCreditCard('456786789');

// repeat

// const message2 = 'Bad weather... All departures delayed...';
// console.log(message2.repeat(5));
