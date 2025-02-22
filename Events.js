let btn1 = document.querySelector("#btn2");
// // btn1.onClick = (e) => {
// //     console.log("btn2 was clicked");
// //     let a = 22;
// //     a++;
// console.log(a); //23
// };

btn1.addEventListener("Click", (evt) => {
    console.log("Button one was clicked");
    console.log(evt);
    console.log(evt.type); // as same as add the remove also written

})

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside the div");
}