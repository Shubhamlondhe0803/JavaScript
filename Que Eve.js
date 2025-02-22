let modeBtn = document.querySelector("#mode");
let currMode = "light Mode";
modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "blue";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "green";
    }

    console.log(currMode);
})

//Toggel button