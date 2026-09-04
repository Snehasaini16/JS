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
