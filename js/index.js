
//#1 double click
const title = document.querySelector("h1")
title.addEventListener("dblclick", () =>{
    title.style.color = "red"
})



//#2 & #3 mouse enter and mouse leave events 

const busImage  = document.querySelector(".intro img")
busImage.addEventListener("mouseenter", () =>{
    busImage.style.transform="scale(1.15)";
    busImage.style.transition = "all 0.5s"
})

busImage.addEventListener("mouseleave", () =>{
    busImage.style.transform = "scale(1)"
})

//#4 scroll 

const scrollImg = document.querySelector("h2")
window.addEventListener("scroll", () =>{
    scrollImg.style.color = "blue"
})

// #5 resize
const resizeText = document.querySelector(".intro p")
window.addEventListener('resize', () =>{
    resizeText.style.transform = "scale(1.5)"
})


// #6 Keypress
const navbarBackground = document.querySelector('nav')
navbarBackground.addEventListener("keypress", () => {
    navbarBackground.style.backgroundColor = "red"
})

// #7 Load
let headerFour = document.querySelectorAll('h4')
headerFour.forEach((element) => {
window.addEventListener("load", () => {
    element.style.fontSize = "5rem";
});
});

// #8 wheel

const contentSection = document.querySelector('.content-section')
contentSection.addEventListener("wheel", () =>{
    contentSection.style.backgroundColor = "green"
});

// #9 Drag and drop

let textSection = document.querySelector(".content-section")
const drag = document.createElement("div");
drag.classList.add("drag-section");
drag.setAttribute("draggable", "true");
drag.textContent = "Drag here!"

textSection.appendChild(drag);


let dropElement = document.querySelector("footer")
    const dragAndDrop = document.createElement("div");
    dragAndDrop.classList.add("drop-section");
    dragAndDrop.textContent = "Drop here!";

dropElement.prepend(dragAndDrop);

// #10 click & nested event

const destinationColor = document.querySelector(".content-pick")
destinationColor.addEventListener("click", () => {
    destinationColor.style.backgroundColor = "#fbd9bb"
})

const destinationColor1 = document.querySelector(".destination")
destinationColor1.addEventListener("click", (event) => {
    event.stopPropagation();
    destinationColor1.style.backgroundColor = "#1E90FF"
})

const destinationColor2 = document.querySelector(".btn")
destinationColor2.addEventListener("click", () => {
    destinationColor2.style.backgroundColor = "hotpink"
})


//Prevent default

const stopLinks = document.querySelectorAll(".nav-link")
stopLinks.forEach((element) => {
    element.addEventListener("click", (event) =>{
        event.preventDefault();
    })
})
