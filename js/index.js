// Your code goes here

// view the console to see events

// mouse over the logo
let logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function() {
    console.log("Mouse over logo");
});

// type on the keyboard
window.addEventListener("keydown", function(e) {
    console.log(`${e.key} key was pressed`);
});

// rotate the wheel on the mouse
window.addEventListener("wheel", function() {
    console.log("You are turning the wheel on the mouse");
});

// when dragging and dropping the copyright
let copyright = document.querySelector("footer p");
copyright.addEventListener("dragstart", function(e) {
    console.log("You started dragging the copyright");
});
copyright.addEventListener("dragend", function(e) {
    console.log("You dropped the copyright");
});

// happens once page has loaded
window.addEventListener("load", function() {
    console.log("Page has been loaded");
});

// when links get focus
let links = document.querySelectorAll(".nav-link");
links.forEach(function(link) {
    link.addEventListener("focus", function() {
        console.log("Link received focus");
    });
});

// when the window is resized
window.addEventListener("resize", function() {
    console.log("Window has been resized");
})

// when the window is scrolled
window.addEventListener("scroll", function(e) {
    console.log("The window has been scrolled");
});

// when copying any text
document.addEventListener("copy", function(e) {
    console.log("Text has been copied");
    e.preventDefault();
});

// double click fun bus image
let img = document.querySelector(".intro img");
img.addEventListener("dblclick", function() {
    console.log("Fun Bus Image double clicked");
});


