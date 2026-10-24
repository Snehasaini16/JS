// inheritance being done in prototypes

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hello im ${this.name}`);
    
};

let sneha = new Person("sneha")
sneha.greet();

//ability to inject anything into the fn(PERSON) that means
// im capable of doing prototypal inheritance and how to access vars
