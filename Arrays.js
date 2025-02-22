//Arrays
const myArray = [1, 2, 3, 4, 5];
console.log(myArray[0]); //It will give the output as value which are located at index 0..

//Array methods

myArray.push(6)
myArray.push(7)
console.log(myArray); //The push are basically used for push the values in an arrays..

myArray.pop()
console.log(myArray); // The pop are basically used for remove the value from array..

myArray.unshift(9)
console.log(myArray); //The unshift basically add a value at the initial stage 
// beacuse of that the other values are also get shiffted & its a real time drawback..

myArray.shift()
console.log(myArray); // The shift works like a pop in array..

console.log(myArray.includes(9)); // The includes are basiccaly states that the value are present or not in an array
//If yes then it will print True otherwise it will print false and datatype is (boolean)....

console.log(myArray.includes(4)); //True

console.log(myArray.indexOf(4)); //It will show the index number of that value which we have enterd...

const newArr = myArray.join()
console.log(myArray);
console.log(newArr); //It will basically join the array and it will convert it into the string..

//Slice and splice imp....

console.log("A", myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3) //Slice print the array as it is.
console.log("C", myArray); //The Splice change the format of an array..
console.log(myn2); //The splice manipulate the original array..