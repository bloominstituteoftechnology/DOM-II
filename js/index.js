// Your code goes here
const logoMouseOver = document.querySelector(".logo-heading");
logoMouseOver.addEventListener('mouseover', (e)=> {
    e.target.style.backgroundColor = "green";
});


const fKey = document.querySelector("body");

fKey.addEventListener("keydown", (e)=> {
    e.target.style.backgroundColor = "red";
});


const mouseWheel = document.querySelector("body");

mouseWheel.addEventListener("wheel", (e)=> {
    e.target.style.backgroundColor = "yellow";
});

const doubleClick= document.querySelector("img");

selectorText.addEventListener("dblclick", (e)=> {
    e.target.style.color = "purple";
});

const mouseLeave = document.querySelector(".nav");

mouseLeave.addEventListener("mouseover", (e)=> {
    e.target.style.backgroundColor = "blue";
});


const pWhite = document.querySelector("p");

pWhite.addEventListener("mouseleave", (e)=> {
    e.target.style.backgroundColor = "white";
});

const navLinkBlack = document.querySelector(".nav-link");

resizer.addEventListener("mouseenter", (e)=> {
    e.target.style.backgroundColor = "black";
});

const keyupImage = document.querySelector(".intro img");

keyupImage.addEventListener("keyup", (e)=> {
    e.target.style.backgroundColor = "green";
});

const keyPress = document.querySelector(".nav");

keyPress.addEventListener("keypress", (e)=> {
    e.target.style.backgroundColor = "black";
});

const jKey = document.querySelector(".nav");

jKey.addEventListener("keydown", (e)=> {
    e.target.style.backgroundColor = "black";
});

const qKey = document.querySelector("text-content");

qKey.addEventListener("keydown", (e)=> {
    e.target.style.backgroundColor = "yellow";
});