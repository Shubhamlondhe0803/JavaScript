//Singlton
// Object.create .. its a method to create an object using constructor


//object litreals
const mySym = Symbol("Key1")



const JsUser = { //Object
    name: "Shubham",
    "Full name": "Shubham Londhe",
    [mySym]: "mykey1",
    age: 21,
    location: "Pune",
    email: "shubham@gmail.com"

}
console.log(JsUser.email); //Thses are the two methods to acces the values
console.log(JsUser["name"]);
console.log(JsUser["Full name"])
console.log(JsUser[mySym]);

//The values can be change or override using the(=) symbol
JsUser.email = "shubhamchat@gmail.com"
console.log(JsUser.email)

//Object.freeze(JsUser) // With the help of freeze keyword we can freeze the changes of any obj.


JsUser.email = "shubhamchat@gmail.com" // The previous object or info can be change
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

console.log(JsUser.greeting());