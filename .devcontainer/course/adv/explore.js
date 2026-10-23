console.log("hello");

function sayHello(){
    console.log("Im saying hello")
}
//we are not immediately calling this fn we need certain time to call it
setTimeout( () => {
    sayHello();
});

//here the code is not follow the default sequence that's what ,akes it asynchronus

for (let index = 0; index < 10; index++) {
    console.log(index); 
    
}
