// console.log(2>1) -->comparisons like these are simple

// console.log("2">1)
// console.log("02">1) -->both gives true

// console.log(null>0) -->false -->equality check
// console.log(null==0) -->f -->equality check
// console.log(null>=0) -->t -->comparison
// comparisons convert null to a num, treating it as 0 
// same for undefined but it always gives false
// *****AVOID THESE TYPES OF CONVERSIONS*****                     

// === ---> strict check
// console.log("2"==2); -->true
// console.log("2"===2)  --->false coz conversion doesnt happen   
