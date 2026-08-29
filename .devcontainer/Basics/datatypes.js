"use strict"; //treats all JS code as newer version

//alert(3+3) --> we are using node js not browser there is diff syntax to use alert in node

//avoid semicolons

//DATATYPE CONVERSION AND OPERATIONS
// let score = "33abc" //if score=NULL its value will be 0
//similary u can check for undefined,bool val(t/f)

// console.log(typeof score)
// console.log(typeof(score))

// let val = Number(score)
// console.log(typeof val)
// console.log(val)

// 33 -> 33
// true->1 , false->0

// let isLoggedIn = "eejejeje"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1->true , 0->false,""->false,"sneha"->true
// let someNum = 12

// let stringNum = String(someNum)
// console.log(typeof stringNum)

// **************OPERATIONS*****************
let val = 3
let negVal = -val
// console.log(negVal)

// console.log(2+2) -->works for every operator
let str1 = "heyoo"
let str2 = " isnehaha"

let str3 = str1+str2
// console.log(str3)

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2) //122
// console.log(1+2+"2") //32

// console.log(+true) -->converted to 1
// console.log(+"") -->0

let num1,num2,num3

num1=num2=num3=2+2

// PREFIX AND POSTFIX
// let i = 0;    // i = 0
// let j = ++i;  // i = 1, j = 1
// let k = --i;  // i = 0, k = 0
// let i = 0;    // i = 0
// let j = i++;  // i = 1, j = 0           
// let k = i--;  // i = 0, k = 1

// ***TYPES OF DATATYPES*** done on the basis of how the data is stored in memory and is accessed
// PRIMITIVE--> 7 categories -->call by value(the copy is given)
// String,boolean,NULL,Number,undefined,symbol(to make an val unique),Bigint

const id = Symbol('123')
const newId = Symbol('123')
// console.log(id===newId);

const bigNum = 846456059856984n //n makes it bigINT

// NOM PRIMITIVE OR REFERENCE TYPE --->pass by reference
// arrays,objects, functions
const heroes = ["spidey","IronMan","shakal"]
{
    name:"sneha"
    age:22
}
//or
let myObj={
    name:"sneha",
    age:22,
}

const myFn = function(){
    console.log("Hello World");
    
}

const outsideTemp = null
// console.log(typeof outsideTemp) --->object
/*
undefined->undefined
Null->object
bool->bool
number=number
string->string
non-primitive type->object
 */

// *******************************************************
// stack(primitive)->copy of val,heap memory(non primitive)->reference pf val

let myName = "sneha"
let anotherName = myName
anotherName = "bharti"

console.log(myName)
console.log(anotherName)

let userOne = {
    email:"abc",
    upi:"123"
}

let userTwo = userOne
userTwo.email = "abc@google.com"
console.log(userOne.email)
console.log(userTwo.email)

