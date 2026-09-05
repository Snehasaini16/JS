let a = 10
const b = 20
var c = 300

// this is scope
if(true){
    let a = 100
    const b = 200
    // console.log(b); no overwrite

    var c = 30 //this will overwrite the val
    console.log(c);
    // console.log("Inner:",a) both will be printed no overwrite
}

console.log(a);
console.log(b);
console.log(c);
