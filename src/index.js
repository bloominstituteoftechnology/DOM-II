import './less/index.less'

// Your code goes here!

// 1 - Click to make image small
const busImg = document.querySelector(".intro img");

busImg.addEventListener("click", () => {
    busImg.classList.toggle("small");
})

// 2 - Double Click to turn font red
const introH2 = document.querySelector(".intro h2");

introH2.addEventListener("dblclick", () => {
    introH2.classList.toggle("red")
})

// 3 - Drag and hide img
const letsGoImg = document.querySelector("#map-img");

letsGoImg.addEventListener("drag", () => {
    letsGoImg.classList.add("hidden");
})

// 4 - Dark mode on D or d keydown
const body = document.querySelector("body");

document.addEventListener("keydown", (event) => {
    if (event.key === "d" || event.key === "D"){
        body.classList.toggle("darkmode");
    }
})

// 5 - Small text
const destinationTitleOne = document.querySelector(".destination:nth-of-type(1) h4");

document.addEventListener("scroll", () => {
    destinationTitleOne.classList.toggle("smallText");
})

// 6 - Big text
const destinationTitleTwo = document.querySelector(".destination:nth-of-type(2) h4");

destinationTitleTwo.addEventListener("mouseover", () => {
    destinationTitleTwo.classList.add("bigText");
})

// 7 - copy any text on page to make this text wide
const destinationTitleThree = document.querySelector(".destination:nth-of-type(3) h4");

document.addEventListener("copy", () => {
    destinationTitleThree.classList.add("wideText");
})

// 8 - Mouse leave image disappears
const boat = document.querySelector(".content-destination img");

boat.addEventListener("mouseleave", () => {
    boat.classList.add("hidden");
})

// 9 - press "Delete" key and everything will hide
const clear = document.querySelector("body");

document.addEventListener("keydown", (event) => {
    if (event.key === "Delete"){
        clear.classList.add("hidden");
    }
})

// 10 change background to gradient color when g is pressed
const gradient = document.querySelector("body");

document.addEventListener("keydown", (event) => {
    if (event.key === "g" || event.key === "G"){
        gradient.classList.toggle("gradient");
    }
})


// Prevent Default
const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        window.open('https://google.com/', '_blank');
    })
})