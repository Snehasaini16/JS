// const coding = ["js","ruby","py","cpp"]

// const values = coding.forEach( (item)=> {    //=>FOR EACH TAKES CALLBACK
//     console.log(item);
//     return item //=>still undefine even if upper line is not there
    
// })

// console.log(values); =>undefined even if return is not used
//for each doesnt return any value

const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newNums = myNums.filter( (num) => num > 4)  //FILTER ALSO TAKES CALLBACK
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num>4
// }) 
// console.log(newNums); //gives empty array if return not used when scope is used

// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


//map is also an callback fn
// const newNums = myNums.map( (num) => {return num+10})
// console.log(newNums);

/*****CHAINING *******/
// const newNums = myNums
//                 .map( (num) => num*10)
//                 .map( (num) => num+1)
//                 .filter( (num) => num>=40)
// console.log(newNums);


/*********REDUCE***********/
//const nums = [1,2,3]

// const Total = nums.reduce(function (acc,curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
    
//     return acc + curr
// },0)

// const myTotal = nums.reduce( (acc,curr) => acc+curr,0)
// console.log(Total);

const cart = [
    {
        item:"js course",
        price:2999
    },
    {
        item:"py course",
        price:3999
    },
    {
        item:"cpp course",
        price:4999
    },
    {
        item:"java course",
        price:5999
    },

]

//add all the prices in cart
const totalPay = cart.reduce( (acc,item) => acc+item.price,0)
console.log(totalPay);

