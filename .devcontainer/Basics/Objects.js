//singleton
//object literals
// Object.create => constructoe methond =>singleton is made thru this

const mySym = Symbol("Key1")

const user = {
    name:"Sneha",
    "full name":"Sneha Saini",
    mySym: "myKey1", //to use it as symbol do [mySym]:"myKey1"
    age:22,
    location:"jaipur",
    email:"abs@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["mon","sat"]

} //object created,key-val pairs

// console.log(user.email);
// console.log(user["email"]); //why to use this? see below ex
// console.log(user["full name"]) //i wont be able to access it with the first method
// console.log(user.mySym)
// console.log(typeof user.mySym) //string but it should be symbol
// console.log(user[mySym])

// user.email = "abc@gmail.com" =>to update any val
// Object.freeze(user) =>after this val cannot be changed and it doesn't throw error

//console.log(user)

// user.greeting = function(){
//     console.log("Hello");
// }

// user.greet = function(){
//     console.log(`hello user,${this.name}`)
// }
// console.log(user.greeting())
// console.log(user.greet())

const tinderUser = new Object() //=>singleton obj
// or
// const tinderUser = {} => non-singleton obj
tinderUser.id = "123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = { //nested objects
    email: "some@gmail.com",
    fullname : {
        username: {
            firstname: "sneha",
            lastname: "saini"
        }
    }
}

// console.log(regularUser.fullname?.username) =>qn mark checks and prevents error

const obj1 = {1:"1",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2} =>obj inside obj
// const obj3 = Object.assign({},obj1,obj2) =>{} look over this
// const obj3 ={...obj1,...obj2} => other way to combine:SPREAD OPERATOR
//console.log(obj3)
// copies the val of all of the enumerable own properties from one or more source sobjs to a target obj returns the target obj

const users = [
    {
        id:1,
        email:"abc"
    },
    {
        id:2,
        email:"stu"
    }
]

// users[1].email =>access this way
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) =>key val pairs
// console.log(tinderUser.hasOwnProperty('isLoggedIn))

// ******THIRD LECTURE**********
// DESTRUCTURING
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {price:p} = course
// console.log(price)
// console.log(p); =>same op =>destructuring

// const navbar = ({}) => { =>REACT

// }

// navbar(company = "hitesh")

// { =>JSON STRUCTURE KEY-VAL both strings
//     "name": "sneha",
//     "coursename": "JS",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


