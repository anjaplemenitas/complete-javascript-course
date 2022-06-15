// JavaScript Fundamentals – Part 1

// Coding Challenge #1

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = (markWeight / markHeight ** 2).toFixed(1);
// markWeight / (markHeight * markHeight) 
const johnBMI = (johnWeight / (johnHeight * johnHeight)).toFixed(1);
// johnWeight / johnHeight ** 2

// console.log(markBMI, johnBMI)     // testing
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI); // getting true

// Coding Challenge #2

if (markHigherBMI) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
};

if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
};


// Coding Challenge #3

const dolphinsScore = (100 + 1 + 300)/3;
const koalasScore = (100 + 1 + 300)/3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore) {
    console.log("Winners are Dolphines!");
} else {
    console.log("Winners are Koalas!");
};

// Bonus1 & Bonus2
const dolphinWinner = dolphinsScore > koalasScore;
const koalasWinner = dolphinsScore < koalasScore;
const tightScore = dolphinsScore === koalasScore;

if (dolphinWinner && dolphinsScore >= 100) {
    console.log("Winners are Dolphines!")
} else if (koalasWinner && koalasScore >= 100) {
    console.log("Winners are Koalas!");
} else if (tightScore && dolphinsScore >= 100 && koalasScore >= 100) {
    console.log("Draw!");
} else {
    console.log("No winner!");
};


// Coding Challenge #4

const bill = 275;

const tip = bill > 50 < 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)