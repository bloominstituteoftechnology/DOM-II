// Your code goes here

// Global Selectors

let navBar = document.querySelectorAll("nav a");
let button = document.querySelectorAll(".btn");
let image = document.querySelectorAll("img");


// Load
// Goal: Create an alert that welcomes you to the site
// Result: Very easy
// Stretch: Add options?? So maybe use prompt?
let welcomeMessage = window.addEventListener("load", event => {
    alert("Welcome to the site")
});



// Mouseover and Mouseout
// Goal: Links add border on mouseover, then lose styling on mouseout
//Result: about 10mins, SWEET!!!
//Restretch: Add an FAQ section onto the nav bar
navBar.forEach(item => {
    item.addEventListener("mouseover", (event) => {
        item.style.borderBottom = "5px solid red";
    });
    item.addEventListener("mouseout", event => {
        item.style.borderBottom = "none";
    });
});

// let faq = document.createElement("nav a");
// faq.textContent = "FAQ";
// navBar.appendChild("faq")



// Keydown
// Goal: let user press the ESC key to get outta windows/prompts
// Stretch: Use Enter key to jump down the page a certain number of scrolls
// This seems to be outdated or something, so I'd like to learn more about it
window.addEventListener("keydown", (event) => {
    if (event.keyCode == "27") {
        alert("Escape Key pressed")
    };
});


// Wheel
// Goal: Idk what to do with this really so I'm gonna watch some vids


// Click
// Goal: Add a prompt for the sign up buttons
// Stretch: Something more interactive with this
button.forEach(btn => {
    btn.addEventListener("click", event => {
        prompt("Giveth thine email")
    });
});

// Double click
// Goal: change styling of pictures and offer photo credit. I also want to add a pointer cursor on hover
image.forEach(img =>{
    img.addEventListener("mouseover", event => {
        img.style.cursor = "pointer";
    });
    img.addEventListener("dblclick", event => {
        img.style.opacity = "0.5";
        imageTextBox.style.opacity = "1";
    });
    img.addEventListener("mouseout", event => {
        img.style.opacity = "1";
        imageTextBox.style.opacity = "0";
    });
});

let imageContainer1 = document.querySelector(".img-content");
let imageTextBox = document.createElement("h2");
imageTextBox.textContent = "Photo Credit Someone";

document.querySelector(".img-content").appendChild(imageTextBox);
imageTextBox.style.opacity = "0";

// Scroll
// Goal: when user hits bottom of page, create button that sends user back to top
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrollable) === Math.ceil(scrolled)) {
        alert("You've reached the bottom");
    };
});

let scrollToTop = document.createElement(".btn");
scrollToTop.textContent = "Top";
scrollToTop.style.fontSize = "200px"
document.querySelector("body").appendChild(scrollToTop);
scrollToTop.style.position = "relative"


// Prevent Default
navBar.forEach(link => {
    link.preventDefault();
})