
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

const textSection = document.querySelector(".text-content")
const drag = document.createElement("div");
drag.classList.add("drag-section");
drag.setAttribute("draggable", "true");
drag.textContent = "Drag Away!"

textSection.appendChild(drag);


const dropElement = document.querySelector(".content-destination")
    const dragAndDrop = document.createElement("div");
    dragAndDrop.classList.add("drop-section");
    dragAndDrop.textContent = "Drop here!"

dropElement.appendChild(dragAndDrop)
