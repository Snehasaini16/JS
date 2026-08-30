const score = 400 

const balance = new Number(100) //specifically casts it ass number 

// console.log(balance.toString()) //typeof => string
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) //adds decimal 

const newNum = 12.99
//console.log(newNum.toPrecision(2)) //range 1-21,returns a string

const other = 1000000
// console.log(other.toLocaleString()) //UK standard
// console.log(other.toLocaleString('en-IN')) //Indian st

// *********MATHS***************

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3)); //chooses top val
// console.log(Math.floor(4.8)); //chooses lowest
// console.log(Math.min(2,4,5,6));
// console.log(Math.max(4,6,9,3));
console.log(Math.random());
// console.log(Math.floor(Math.random()*10) +1); =>*10 to shift vals to left,+1 to avoid 0,floor to get small values

const min = 10
const max = 20

/*console.log(Math.floor(Math.random() * (max-min+1) + min))
random gives val btw 0-1, (max-min+1)->range becomes min to max,+min->min val will be min
*/

