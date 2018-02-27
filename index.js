const blocks = document.querySelector(".blocks");
const red = document.querySelector(".block--red");
const blue = document.querySelector(".block--blue");
const green = document.querySelector(".block--green");
const pink = document.querySelector(".block--pink");
const gray = document.querySelector(".block--gray");

// These are all IF statements, responding to specific conditions - which are then called below
blocks.addEventListener("click", (event) => {
    if (event.color === "red") {
        console.log("red");
        red.classList.add("move-to-top");
    }
    if (event.color === "blue") {
        console.log("blue");

        blue.classList.add("move-to-top");
    }
    if (event.color === "green") {
        console.log("green");
        green.classList.add("move-to-top");
    }
    if (event.color === "pink") {
        console.log("pink");
        pink.classList.add("move-to-top");
    }
    if (event.color === "gray") {
        console.log("gray");
        gray.classList.add("move-to-top");
    }
});

// These are calling the addEventListener() to set event.color to a specific color on the event 'click'
red.addEventListener("click", (event) => {
    event.color = "red"; // Is event.color a keyword? What is happening here?  I don't recognize this...?
});

blue.addEventListener("click", (event) => {
    event.color = "blue";
});

green.addEventListener("click", (event) => {
    event.color = "green";
});

pink.addEventListener("click", (event) => {
    event.color = "pink";
});

gray.addEventListener("click", (event) => {
    event.color = "gray";
});