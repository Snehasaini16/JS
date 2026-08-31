// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

let myCreatedDate = new Date(2026,8,31)
// console.log(myCreatedDate.toDateString())

// let myCreatedDateTime = new Date(2026,8,31,6,7)
// console.log(myCreatedDateTime.toLocaletring()) -->will print time also

// let newDate = new Date("2026-02-16") -->YYYY/MM/DD
// console.log(newDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Date.now()) //-->millisecond
// console.log(Math.floor(Date.now()/1000)) -->in seconds
let newDate = new Date()
console.log(newDate)
newDate.toLocaleString('default',{
    weekday:"long"
    
})

