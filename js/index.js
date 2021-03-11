// callback functions

const colorChanger = function(element) {
    element.preventDefault();
    const {target} = element;
    target.style.color = "pink";
}

const colorReturn = function(element) {
    const {target} = element;
    target.style.color = "black";
}

const textChanger = function(element) {
    element.preventDefault();
    const {target} = element;
    target.innerHTML = "whoop";
}

const rounderCorners = function(element) {
    const {target} = element;
    target.style.borderRadius = "10%"
}

// retrieve all of the elements

let navBar = document.querySelector(".nav");
let navList = navBar.querySelectorAll(".nav-link");
let header = document.querySelector(".intro");
let headerTitle = header.querySelector("h2");
let headerText = header.querySelector("p");
let textContent = document.querySelector(".text-content");
let textContentPara = textContent.querySelector("p");
let footer = document.querySelecotr(".footer p");
let bus = header.querySelector("img");


// mouseenter

navList.forEach(a => {
    a.addEventListener("mouseenter", colorChanger)
});

// keydown

headerTitle.addEventListener("keydown", colorChanger);

// wheel

headerText.addEventListener("wheel", colorChanger);

// scroll

textContentPara.forEach(a => {
    a.addEventListener("scroll", textChanger);
})

// click

footer.addEventListener("click", colorChanger);

// resize

footer.addEventListener("resize", textChanger);

// reload 

footer.addEventListener("reload", colorChanger);

// mousemove

bus.addEventListener("mousemove", rounderCorners);

// mouseleave

headerTitle.addEventListener("mouseleave", colorReturn);









