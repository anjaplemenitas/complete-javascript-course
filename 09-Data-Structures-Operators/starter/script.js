'use strict';
/*
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
*/

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
