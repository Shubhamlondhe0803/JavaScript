// -------------------- If - else -----------------------------
const temperature = 41

if (temperature === 41) {
    //console.log("less than 50");
} else {
    // console.log("Tempeture is greater than 50");
}
//console.log("Execute");

const score = 200
if (score > 100) {
    const power = "fly"
        // console.log(`user power: ${power}`)
}

const userLoggedIn = true
const debitCard = true

// if (userLoggedIn && debitCard && 2 == 3) {
//     //console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     //console.log("User logged in");}



// Using && we can check multiple conditions at a time.

//----------------------- Switch case --------------------------------------

const month = 3 //key
switch (month) {
    case "jan":
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;

    default:
        console.log("default case match");
        break;
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Falsy values

// false, 0, -0,BigInt,0n," ",null,undefined,NaN

//truthy values

// "0","false"," ",[],{},function(){}

//the values which are writen in String they are truly values