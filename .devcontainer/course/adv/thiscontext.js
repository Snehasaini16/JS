const person = {
    name: "sneha",
    greet(){
        console.log(`Hi, I am  ${this.name}`);
        
    },
};

person.greet(); // im sneha

const greetFn = person.greet
greetFn() //im undefined => context is lost

// to grab the context we need to bind it
const boundGreet = person.greet.bind({name: "spooi"})
boundGreet()

/*bind
call() => accepts args individually
apply() => accepts args as a single array
*/