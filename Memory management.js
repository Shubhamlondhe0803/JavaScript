// Stack
//1. The primitive datatypes are stored in a stack
//2. whenever we strore a obj in stack the copy of that
//obj will get.
let myname = "shubham@123"
let anothername = "Shubham"
console.log(myname);
console.log(anothername);



//Heap
//1.The non-primitive datatypes are stored in a stack.
//2. Whenever we store anyobj in heap 
// it will give us a reference of that obj.
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "shubham@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);