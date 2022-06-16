'use strict'; 

// Coding Challenge #1

 const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3;
 };

 const avgDolphines = calcAverage(300, 23, 71);
 const avgKoalas = calcAverage(2, 54, 49);

 console.log(avgDolphines, avgKoalas); // testing average score

 const checkWinner = function (avgDolphines, avgKoalas){
     if (avgDolphines >= avgKoalas*2) {
        console.log(`Dolphines win (${avgDolphines} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphines*2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphines})`);
    } else {
        console.log( `No team wins!`);
    }
 }

checkWinner(avgDolphines, avgKoalas);


// Coding Challenge #2

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
    // let tip = 0;

    // if (bill >=50 && bill <= 300) {
    //     tip = bill * 0.15;
    // } else {
    //     tip = bill * 0.20;
    // };
    // return tip

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const calculateTotal = (bills, tips) => { bills + tips; };

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


// Coding Challenge #3

const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

markMiller.calcBMI(); // need to call the method first!
johnSmith.calcBMI();
// console.log(markMiller.bmi)
// highestBMI(markMiller.calcBMI(), johnSmith.calcBMI());

if (markMiller.bmi > johnSmith.bmi) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s BMI (${markMiller.bmi})`);
} else {
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s BMI (${markMiller.bmi})`);
};


// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i <= bills.length -1 ; i++) {
    const calcTip = bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.20;
    tips.push(calcTip);

    const calcTotal = bills[i] + calcTip;
    totals.push(calcTotal);
}

console.log(bills, tips, totals);

// Bonus

const arr = [3, 67, 12, 1233, 412];

function calcAverage(arr) {
    let sum = 0
    for (num = 0; num <= arr.length -1; num ++) {
        sum += arr[num];
    }
    return sum/arr.length;
}
console.log(calcAverage(arr));