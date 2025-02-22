function sayMyName() { // Syntax
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

sayMyName() // () is called as execute and other part call as reference

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
addTwoNumbers(3, 4)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(...num1) {
    return num1
} // This 3 dots are called as rest operators as well as spread operators
//   It will store the diff values in a single bunch

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Shubham",
    price: 199
}

function handleObject(anyobject) {
    console.log(`USername is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)
handleObject({
    username: "Sham",
    price: 299
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));