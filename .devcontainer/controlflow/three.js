// const myObj = {
//     js: 'Javascript',
//     cpp: 'C++',
//     Rb: 'Ruby'
// }

//*****For in loop is used here******
// for (const key in myObj) {
//     //console.log(key)
//     //console.log(myObj[key])
//     console.log(`${key} shortcut is for ${myObj[key]} `);
    
// }

// const programming = ['js','cpp','rb','py']

// for (const key in programming) {
//     console.log(key)
//     console.log(programming[key])
    
// }

const coding = ['js','cpp','rb','py','java']
//DONT WRITE NAME
// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,indexedDB,arr) =>{
//     console.log(item,indexedDB,arr);
    
// })

const myCoding = [
    {
        name: "c++",
        shortcut: "cpp"
    },
    {
        name: "javascript",
        shortcut: "js"
    },
    {
        name: "python",
        shortcut: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.name);
    
})