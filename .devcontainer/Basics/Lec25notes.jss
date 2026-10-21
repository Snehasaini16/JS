/* 
******EXECUTION CONTEXT*******
how the code is executing

1. Global execution context
this is always made even if there is no value in into
in browser, when we print this keyword it returns windows function
2. Function execution context


Eval execution context => property of global object

How js code is executed? in two phases:
(i)MEMORY EXECUTION PHASE
-vars or anything that u have declared, memory is allocated to 
them but not executed

(ii)EXECUTION PHASE

let val1 = 10
let val2 - 7

function add(num1,num2){
    let total = num1+num2
    return total
}
let res1 = add(val1,val2)
let res2 = add(10,3)

Steps:
1. thru global execution or env the code is ran , allocated to this
2. Memory phase- memory allocated
(val1,val2,res1,res2->undefined,add->definition)
3. Execution phase-val is assigned
(val1=10,val2=5,add->new execution context{A. new var env+execution thread},res=15)
A. memory phase{val1,val2,total-undefined}
B. execution context{num1-10,num2-7,total-17}
total is returned to global execution context
now whole A,B is deleted

repeat same for res2
new var wnv + thread
A. memory phase{val1,val2,total-undefined}
B. execution context{num1-10,num2-3,total-13}
total is returned to global execution context
now whole A,B is deleted

******CALL STACK******
how fns are executing,loaded into the memory
follows LIFO


*/