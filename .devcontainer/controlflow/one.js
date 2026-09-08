//if statement

// if(2==='2'){
//     console.log("done");
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
//     console.log(`user power: ${power}`);
// else{
//     console.log('not done')
// }

//=== => it also checks for type
// !== => checks for negative sign
// scope of var is global so even if u define it in a scope it is accessigble outside
// which can led to overwrites and unsafe code

const balance = 1000
// if(balance>500) console.log("pass"),console.log("hehe")
// valid but not readable

// if(balance < 500){
//     console.log("less than 500")
// } else if(balance <750){
//     console.log("less than 750")
// } else{
//     console.log("less than 1000")
// }

// const userLogin = true
// const debitCard = true

// if(userLogin && debitCard){
//     console.log("allow to buy courses")
// }

// const month = 3
// switch(month){
//     //to copy the case shift+alt+down arrow
//     case 1:
//         console.log("jan")
//         break;
 
//     case 2:
//         console.log("jan")
//         break;

//     case 3:
//         console.log("march")
//         break;
 
//     default:
//         break;
// }

/* once the case matches it executes all the cases 
after it except default if break is not used*/

/* *****falsy value***** 
false,0,-0,BigInt 0n,"",null,undefined, NaN

*****truthy values*****
"0", 'false'," ", {} , function(){},  
*/

// if(userEmail.length()===0){
//     console.log("array is empty")
// }

// const obj = {}

// if(Object.keys(obj).length===0){
//     console.log("object is empty")
// }

//*****nullish coalescing (??):null, undefined****
let val
//val = 5 ?? 10 => 5
//val = null ?? 10 => 10
//val1 = undefines ?? 15 =>15
//console.log(val)

// ****ternary operator****
//condition ? true : false

const ice = 100
ice<=80 ? console.log("less than 80") : console.log("more than 80")



