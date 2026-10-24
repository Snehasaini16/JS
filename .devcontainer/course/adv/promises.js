//we can manually create the asynchronus behaviour of JS by using promises

function fetch(){
    return new Promise( (resolve,reject)=> {
        setTimeout( ( )=> {
            let s = true;
            if(s){
                resolve("Data fetched successfully")
            }else{
                reject("Error fetching data")
            }
        },3000)
    })
}

//how to consume promise
// let response = fetch(); //doesnt give anything in return
// console.log(response);

fetch()
    .then((data)=> console.log(data))  
    .catch((error)=>console.log(error))


