let myDate = new Date()
console.log(myDate.toString()); //The below three are the methods to print the date,
console.log(myDate.toISOString()); //using tostring method....
console.log(myDate.toJSON);
console.log(myDate.toDateString);
console.log(typeof myDate) //object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
//Count the date and time
let mysecCreatedDate = new Date("01-14-2024");
console.log(mysecCreatedDate.toLocaleString);
//Count the time in min & sec
let myTimeStamp = Date.now()
console.log(myTimeStamp)