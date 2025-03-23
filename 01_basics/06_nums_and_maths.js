const score = new Number(150)
console.log(score.toString().length);
console.log(score.toFixed(1));

const balance = 1243.569
console.log(balance.toPrecision(5));

const amount = 1100000
console.log(amount.toLocaleString('en-IN'));

//-----------------------MATHS------------------------

console.log(Math.abs(-4));
console.log(Math.round(4.65));
console.log(Math.ceil(4.26));
console.log(Math.floor(3.97));
console.log(Math.min(4,9,2,6));
console.log(Math.max(8,4,3,1));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1); 

const min = 6
const max = 14

console.log(Math.floor(Math.random()*(max - min +1))+ min);
