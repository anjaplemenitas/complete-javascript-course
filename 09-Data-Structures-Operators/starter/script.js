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

*/
