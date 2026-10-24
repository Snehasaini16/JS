function fetchUserData() {
    return new Promise( (resolve,reject)=> {
        setTimeout( ()=> {
            resolve({name:"sneha",url:"eheheh.com"})
        },3000)
    })
}

// fetchUserData
// .then()
// .catch()  => common way

//ASYNC 
async function getUserData(){
    try{
        console.log('fetching user data...');
        const userData = await fetchUserData()
        console.log("User data fetched successfully")
        console.log("user data: ",userData)
    } catch(error){
        console.log("Error fetching data", error)
    }
    
}

getUserData();