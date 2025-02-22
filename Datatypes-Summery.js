// Primitive Datatypes
// There are 7 primitive datatypes
// String,Number,Boolean,null,Undefined,Symbol,BigInt

const Score = 100
const Scorevalue = 100.3

const isLoggedin = false //Boolean type
const outsideTemp = null
let userEmail; // Undefined

//There is no need to write data type...
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const heros = ["Shaktiman", "Rahulgandhi", "doga"];
let myObj = {
    name: "Shubham",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof symbol); // To find the type of the object