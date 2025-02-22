// Immediately Invoked Function Expressions (IIFE)...

(function ram() {
    console.log('DB CONNECTED');
})
(); // this is a named IIFE


// When you create two functions at that time you need to add (;) to add them.


((name) => { // Arrow function
    console.log(`DB CONNECTEDN TWO ${name}`)
})
('Shubham') // we can also use parameters