let a = 10
const b = 20
var c = 300

// this is scope
if(true){
    let a = 100
    const b = 200
    // console.log(b); no overwrite

    var c = 30 //this will overwrite the val
    //console.log(c);
    // console.log("Inner:",a) both will be printed no overwrite
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const name = "sneha"

    function two(){
        const web = "github"
        // console.log(name)
    }
    // console.log(web) =>this will give error
    // two()
}
// one()

if(true){
    const name = "sneha"
    if(name === "sneha"){
        const web = "youtube"
        // console.log(name+web)
    }
    // console.log(web)
}
// console.log(name)

/********INTERESTING*********/

// console.log(plusone(5)); =>this will be accessible
function plusone(num){
    return num + 1
}

// addTwo(5); => wont be accessible before initialization
const addTwo = function(num){ //addTwo is also a fn but sometimes it is also called expression
    return num+2
}



