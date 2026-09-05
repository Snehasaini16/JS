// console.log("S");
// console.log("I");
// console.log("S");
// console.log("I");

// use fns for better approach
function myName(){
    console.log("S");
    console.log("I");
    console.log("S");
    console.log("I");
}

// myName()
// myName => w/o brackets its just fn reference'

// function add(num1,num2){
//     console.log(num1+num2)

// }

// add(3,7)
//const res = add(3,8)
// console.log("result ",res) =>for this in fn u've to return instead of printing

function userLoginMsg(username){
    if(username===undefined){ //or !username
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(userLoginMsg("Sneha"))
//console.log(userLoginMsg()) //=>when no val is passed it returns undefined 
/* we can also take default values if the user doesnt
enter a val default one gets printed
fn userloginMsg(username="sam")
*/

function calculatePrice(...num1){
    return num1
}

//console.log(calculatePrice(200,300,500))
//when i pass multiple vals w/o ... it'll print the 1 val
// ... makes all values into an array
// ... is either rest or spread depending on its use case
/*fn calculatePrice(val1,val2,...num1)
=> in this first 2 val's will go to val 1 nd val 2
rest will be in the array
 */

const user = {
    name: "sneha",
    price: 200

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

//handleObject(user)

// handleObject({name:"sam",
//     price:299
// })

const arr = [200,400,500,100]

function secondVal(getArray){
    return getArray[2]
}

// console.log(secondVal(arr))


