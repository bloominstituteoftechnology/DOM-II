// Your code goes here
// mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick


const navLink = document.querySelector('.nav');
navLink.addEventListener("dblclick", (event) => {
    event.target.style.backgroundColor = "green";
});

const funBus = document.querySelector('.logo-heading');
funBus.addEventListener("mouseover", (event) => {
    funBus.style.fontSize = "5rem";
});

const keyUsed = document.querySelector("body");
keyUsed.addEventListener("keydown", (event) => {
    console.log("key was pressed!")
});

const wheelZoom = document.querySelector(".img-content");
wheelZoom.addEventListener("wheel", (event) => {
    console.log("this is zooming in")
});

const dragEm = document.querySelector(".content-destination.img");
console.log(dragEm);