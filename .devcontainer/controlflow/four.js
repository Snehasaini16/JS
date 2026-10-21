//const coding = ['js','cpp','rb','py','java']

// const vals = coding.forEach( (item) => {
//     console.log(item);
//     return item
//     //forEach doesnt return any val so undefined will be printed
// })

// console.log(vals)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);
//                    OR
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);
//                    OR
// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4) newNums.push(num)
    
// })
// console.log(newNums);
/* books ex

let userBooks = books.filter( (bk) => bk.genre === 'History)

userBooks = books.filter( (bk) => { 
    return bk.publish>=2000})    Lec-30(17:00)
 */


//const newNumbers = myNums.map( (num) => num+10)

const newNumbers = myNums
                    .map((num) => num*10)
                    .map((num) => num+1)
                    .filter( (num)=> num>=40)
console.log(newNumbers);
