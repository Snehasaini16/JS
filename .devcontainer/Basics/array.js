const arr = [0,1,2,3,4,5,true,"sneha"]

//resizable,mix of datatypes allowed, arr copies->shallow copies
// console.log(arr[0])
//other ways to declare array
const newArr = ["new"]
const myArr = new Array(1,2,3,4)
// console.log(myArr[1])

// array methods
myArr.push(6)
// console.log(myArr)
//myArr.pop()

myArr.unshift(8) //9 is inserted at array start
myArr.shift() //removes first element

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const newA = myArr.join()
//console.log(newA)
//adds of elmnts of the array into a string

//slice , splice
// console.log("A", myArr)

// const myn1 = myArr.slice(1,3) //from 1 to 2
// console.log(myn1)
// console.log("B", myArr)

// const myn2 = myArr.splice(1,3)
// console.log("C", myArr)
// console.log(myn2)


const marvel_heroes = ["spidey", "Ironman", "Thor"]
const dc_heroes = ["superman","batman","flash"]

//marvel_heroes.push(dc_heroes) //took array as an data
// console.log(marvel_heroes)
//const allHeroes = marvel_heroes.concat(dc_heroes) //concat combines two or more arrays and return a new array
//console.log(allHeroes)

// *****spread operator****
const allHeroes = [...marvel_heroes,...dc_heroes]
const arr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr2 = arr2.flat(Infinity)//returns a new array with all subarray elmnts concatenated into it recursively upto the specified depth
// console.log(realArr2)

// console.log(Array.isArray("Sneha"))
// console.log(Array.from("Sneha"))
// console.log(Array.from({name:"sneha"})) //return empty array coz it cannot convert it directly u need to specify

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3))

