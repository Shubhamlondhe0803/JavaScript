 console.log("hello");

 //alert("Welcome in DOM"); //Used to show the alert box in browser
 window.alert("Welcome in DOM");

 console.log(document); //Used to see the whole document from browser

 console.log(window); //Used to access the browser and its properties

 console.log(document.body.childNodes); // we can access the child nodes of the bodyn in browser.

 let heading = document.getElementById("heading"); // we can access the element by its id
 console.log(heading); // we can see the element in console

 let headings = document.getElementsByClassName("heading"); // we can access the element by its class name  
 console.log(headings); // we can see the element in console 
 console.dir(headings); // we can see the element in console


 let paras = document.getElementsByTagName("p"); // we can access the element by its tag name

 console.log(paras); // we can see the element in console

 let allEl = document.querySelectorAll("p"); // we can access the element by its tag name