//-- -- -- -- -- -- -- -- -- -- -- This -- -- -- -- -- -- -- -- -- -- -- -- --
function one() {
    let username = "Shubham"
    console.log(this.username);
}

one() // O/P Undefined

// const chai = function() {
//     let username = "Shubham"
//     console.log(this)
// }

//=================================== Arrow =======================

const chai = () => {
    let username = "Shubham"
        //console.log(this.undefined); //O/P Undefined
}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4)); //7
// 
//const addTwo = (num1, num2) = (num1 + num2) // When we write this type of syntax at that time
//  there is no need to write return statement..

//console.log(addTwo(3, 4)); // This is called implicit return

const addTwo = (num1, num2) => ({ username: "shubham" })

console.log(3, 4)