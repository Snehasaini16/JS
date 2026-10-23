//closure -they remember the env in which they cretaed means
//the fn can retain the vars which are declared outside of it

//IT RETAINS THE MEMORY OF THE FUNCTION

function outer(){
    let count =6;
    return function(){
        count++;
        return count;
    }
}

let ans = outer();
console.log(ans()); //=>7
console.log(ans()); //=>8
console.log(ans()); //=>9 it remembers the updated value
