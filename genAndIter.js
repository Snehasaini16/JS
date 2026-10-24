function* numGen(){
    //generator fn doesnt execute things all at once
    yield 1
    yield 2
    yield 3
}

let gen = numGen();
let genTwo = numGen();
console.log(gen); //Object [Generator] {} => tells im a generator type of object
//console.log(gen()); //=> error: gen is not a fn
console.log(numGen()); //same op as 1st one
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value);//3
console.log(gen.next().value);//undefined

console.log(genTwo.next().value);
console.log(genTwo.next().value);