// Your code goes here

// mouseover
const nav = document.querySelector("nav");
Array.from(nav.children).forEach(child => {
    child.addEventListener("mouseover", function() {
        // child.style.textContent = child.style.textContent.toUpperCase();
        child.style.transform = "scale(1.2)"
    })
})

// keydown
document.addEventListener("keydown", (e) => {
    const footer = document.querySelector("footer");
    const spanKeyDown = document.createElement("span");
    spanKeyDown.textContent = e.keyCode;
    footer.appendChild(spanKeyDown);
});

// wheel
function zoom(e) {
    e.preventDefault();
    scale += e.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    heading.style.transform = `scale(${scale})`;
}

let scale = 1;
const heading = document.querySelector(".nav-container");
heading.onwheel = zoom;

// load
const busImgContainer = document.querySelector(".intro");
busImgContainer.children[0].addEventListener("load", function() {
    busImgContainer.children[0].style.transform = "scale(0.6)";
})

// focus
const inputEl = document.createElement("input");
inputEl.value = "Insert Text";
const home = document.querySelector(".home");
home.appendChild(inputEl);

function foc(e) {
    e.target.style.background = "yellow";
}
const inputElAdded = document.querySelector(".home").children[document.querySelector(".home").children.length - 1].addEventListener("focus", foc);


// resize
const resizeLog = document.createElement("div");
const heightLog = document.createElement("p");
const widthLog = document.createElement("p");
resizeLog.appendChild(heightLog);
resizeLog.appendChild(widthLog);
home.appendChild(resizeLog);

window.onresize = function() {
    heightLog.textContent = window.innerHeight;
    widthLog.textContent = window.innerWidth;
}

// scroll
document.addEventListener("scroll", (e) => {
    document.querySelector(".logo-heading").style.fontSize = `${e.timeStamp / 1000}rem`
});

// select