console.log(typeof "Shubham"); // Shubham String type
console.log(typeof null) //Object

// Primitive datatypes
// 1. numbers => 2 to the power 53
// 2. bigint
// 3. String => ""
// 4. boolean => true / false
// 5. null => Standalone value
// 6. Undefined => Undefined
// 7. Symbole => Unique

let score = null
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);


//When we convert any number then it will suppose to be give a number.

//If we put "33abc "==> it will give NaN (Not a Number)

//True ==>1; false==>0;

//null=0;

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //The o/p will be true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(typeof stringNumber); //String