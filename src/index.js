import './less/index.less'

// Your code goes here!
const links = document.querySelectorAll("a");
const title = document.querySelector('.logo-heading')
const body = document.querySelector('body')
const headImg = document.querySelector('img')
const contentImg = document.querySelector('img-content');
const header = document.querySelector('div')
//Trigger 1: Mouse Over
links.forEach(link => {
    link.addEventListener("mouseover", function(event) {
    event.target.style.color = "orange";
    setTimeout(function() {
        event.target.style.color = "";
        }, 500);
    }, false);
})

//Trigger 2: Click
links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.target.style.color = "red";
        setTimeout(function() {
            event.target.style.color = "";
            }, 500);
    }, false);
})

//Trigger 3: Mouse Enter
title.addEventListener("mouseenter", function(event) {
    event.target.textContent = 'Bun Fus';
});

//Trigger 4: Mouse Leave
title.addEventListener("mouseleave", function(event) {
    event.target.textContent = 'Fun Bus';
});

//Trigger 5: KeyDown  
function sixKeyDown(event) {
    if (event.key === "6") {
        header.style.backgroundColor = 'black';
        body.style.backgroundColor = 'black';
    }
}
document.addEventListener("keydown", sixKeyDown);

//Trigger 6: KeyUp
function sixKeyUp(event) {
    if (event.key === "6") {
        header.style.backgroundColor = 'white';
        body.style.backgroundColor = 'white';
    }
}
document.addEventListener("keyup", sixKeyUp);

//Trigger 7: Wheel
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(1, scale), 2);
    // Apply scale transform
    headImg.style.transform = `scale(${scale})`;
}
let scale = 1;
headImg.onwheel = zoom;

//Trigger 8: KeyPress 
function gKeyPress(event) {
    if (event.key === "g") {
        header.style.backgroundColor = 'orange';
        body.style.backgroundColor = 'orange';
    }
}
document.addEventListener("keypress", gKeyPress);

//Trigger 9:  

//Trigger 10:
