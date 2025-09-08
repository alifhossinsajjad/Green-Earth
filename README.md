1) What is the difference between var, let, and const?


Ans : Diffrence between var,let and const 

*var
.Function-scoped or globally-scoped.it can be accessed anywhere whithin the funcftion it's declared inside a loop or condition block.

*Let and const : 
Block-Scoped . They can only be accessed within the block {} they are declared in .


<hr>

2) What is the difference between map(), forEach(), and filter()?

ANS : 
map():

purpose : transforms each element of an array and returns a new array with the transfromed values.
Example : const numbers = [2,4,5,7];
const dobuled = numbers.map(n*2);
console.log(dobuled);


forEach():

purpose : Executes a fnction for each element in the array . return nothing . It's just loop through 


Example : 

const numbers = [1,3,5,6,];
numbers.forEach(number => console.log(number*2))


filter()

puporse : Filters elements of an array based on a condition and returns a new array with elements that passed the test . Return a new array possible shorter.

Example :

const numbers = [1,23,45,6,4,3];
const even = numbers .filter(number => number%2 === 0);
console.log(even);


<hr>

3) What are arrow functions in ES6?

Ans : Arrow functions are a new way write funcitons introduced in ES6. They are shorter , cleaner , and behave differently from regular function in some case.

Basic Syntax :

funciton add (a,b){
    return a + b 
};

const add = (a,b) => a + b ;

console.log(add(2,3))

<hr>

4) How does destructuring assignment work in ES6?


Ans : Destructuring is a feature in ES6 that lets you unpack values from arrays or projecties from object into variables in a clean , concise way .

<hr>

5) Explain template literals in ES6. How are they different from string concatenation?

Ans : Tamplate literals are a new way of working with string in ES6.