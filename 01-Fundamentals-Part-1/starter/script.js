// LECTURE: Basic Operators

let ukPopulation = 67;

console.log(ukPopulation + 1);
const finlandPopulation = 6;
const averagePopulation = 33;

// LECTURE: Strings and Template Literals

let description = `Portugal is in Europe, and its 11 million people speak portuguese`;

// LECTURE: Taking Decisions: if / else Statements

if (ukPopulation > averagePopulation)
console.log(`UK's population is above average`);
else 
console.log(`UK's population is 22 million below average`);

// LECTURE: Type Conversion and Coercion

console.log('5'+'9')
console.log('124'< 9)

// LECTURE: Equality Operators: == vs. ===

let numNeighbours = prompt('How many neighbour countries does your country have?');

if (numNeighbours == 1)
console.log('More than 1 border')
else
console.log('No borders')

// LECTURE: Logical Operators

const sarahCountryLanguage = 'english'
const sarahCountryPopulation = 50;
const sarahCountryLocation = 'contient'

let country = prompt('Where do you live?');
let countryLanguage = prompt('What is the Language of your county?');
let countryPopulation = prompt('Whats the population of your county?');
let countryLocation = prompt('Is your country island or continent?');

if (sarahCountryLanguage == countryLanguage &&
    sarahCountryPopulation <= countryPopulation &&
    sarahCountryLocation == countryLocation) {
console.log(`You should live in ${country} :)`);
} else {
console.log(`${country} does not meet your criteria :(`);
};

LECTURE: The switch Statement
let language = prompt('What language do you speak?');

switch (language) {
    case 'chinese' || 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
    }

// LECTURE: The Conditional (Ternary) Operator

let country = prompt('Where do you live?');
let countryPopulation = prompt('Whats the population of your county?');

countryPopulation >= 33 ? (message = `${country}'s population is above average`) : (message = `${country}'s population is below average`);
console.log(message)

console.log(
    `${country}'s population is ${countryPopulation > 33 ? 'above' :
    'below'} average`,
  );