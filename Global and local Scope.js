//  let a = 10
//  const b = 20
//  var c = 30

//  console.log(a);
//  console.log(b);
//  console.log(c);

// {} this  curly brakets are called as Scope

let a = 300 // Th9s is called as  Global Scope 

if (true) {
    let a = 10
    const b = 20
    var c = 30
        //  console.log("Inner:", a); // This is called as block Scope..

}


//console.log(a);

//Nested Scope

function one() {
    const username = "Shubham"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()