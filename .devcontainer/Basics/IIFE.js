// Immediately Invoked Fn Expression (IIFE)

// function coffee(){
//     console.log(`DB connected`)
// }
// coffee()

// PROBLEM: global scopes pollution creates issues , to remove that IIFE is used

(function coffee(){
    console.log(`DB connected`)
})(); //this semicolon is necessary otherwise next iife fns will give error

// ()() => first ():fn definition , second ():execution

( (name) =>{
    console.log(`DB connected two ${name}`)
} )('sneha')
// this gives error bcoz in prev fn it is revoked immediately but it it doesnt no where to stop the context for that we need semicolon