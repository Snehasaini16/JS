const user = {
    name: "sneha",
    price: 99,

    welcomeMsg: function(){
        console.log(`${this.name} , welcome to website`)
        console.log(this)
    }
// this : current context ko refer krta h
}

// user.welcomeMsg()
// user.name = "sam" // context is changed here(context:who are we talking about)
// user.welcomeMsg()
// console.log(this) => empty context

// function coffee(){
//     let name = "sneha"
//     // console.log(this.username) => unable to use this in fns
// }

// coffee()

const coffee = /*function*/() => { //arrow makes it a arrow fn
    let name = "sneha"
    // console.log(this.username) => this also doesn't work
    console.log(this) //empty fn
}
// coffee()

// const add = (num1,num2) => {
//     return num1 + num2
// } curly braces require return
// OR

// const add = (num1,num2) => num1 + num2
//const add = (num1,num2) => (num1 + num2) => return not required **implicit return**
// const add = (num1,num2) => ({usernae: "sneha"}) =>to return obj parenthesis is required

// console.log(add(2,4))


