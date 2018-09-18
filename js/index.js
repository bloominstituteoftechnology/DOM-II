// Your code goes here

// Make nav bar opacity change with scroll wheel
const navBar = document.querySelector(".main-navigation");
let navBarOpacity = 0.2;
navBar.style.backgroundColor = `rgba(71, 37, 14, ${navBarOpacity})`;
navBar.addEventListener("wheel", navBarChange);

function navBarChange(e) {
    e.preventDefault();
    console.log(e);
    navBarOpacity += e.deltaY > 0 ? .02 : -.02;
    navBarOpacity = Math.min(navBarOpacity, 1);
    navBarOpacity = Math.max(navBarOpacity, 0);
    navBar.style.backgroundColor = `rgba(71, 37, 14, ${navBarOpacity})`;
}

// Make the main h1 header drag & drop -- manually, without using Drag & Drop events!
const mainTitle = document.querySelector(".logo-heading");
mainTitle.style.cursor = "pointer";
mainTitle.style.position = "relative";
let dragging = false;
let anchorX = 0;
let anchorY = 0;
let mouseOriginX = 0;
let mouseOriginY = 0;
mainTitle.addEventListener("mousedown", startDrag);
mainTitle.addEventListener("mousemove", dragMove);
mainTitle.addEventListener("mouseup", stopDrag);
function startDrag(e) {
    if (e.button === 0) {
        console.log("startDrag");
        dragging = true;
        mouseOriginX = e.screenX;
        mouseOriginY = e.screenY;
    }
}
function dragMove(e) {
    if (dragging) {
        console.log("dragMove");
        mainTitle.style.left = `${anchorX + (e.screenX - mouseOriginX)}px`;
        mainTitle.style.top = `${anchorY + (e.screenY - mouseOriginY)}px`;
    }
}
function stopDrag(e) {
    if (e.button === 0 && dragging) {
        console.log("stopDrag");
        anchorX += e.screenX - mouseOriginX;
        anchorY += e.screenY - mouseOriginY;
        dragging = false;
    }
}

// Alert when page is fully loaded
const foot = document.querySelector("footer");
const loadAlert = document.createElement("p");
loadAlert.textContent = "Website fully loaded!";
loadAlert.style.color = "darkred";
loadAlert.style.fontWeight = "bold";
window.addEventListener("load", function(e) {
    console.log("Load event firing");
    foot.appendChild(loadAlert);
});

// Make nav links glow lime green on click until another is clicked
const navLinks = document.querySelectorAll(".nav-container nav a");
navLinks.forEach(link => {
    link.addEventListener("focus", function(e) {
        console.log("focus");
        e.target.classList.toggle("lime-glow");
    });
    link.addEventListener("blur", function(e) {
        console.log("blur");
        e.target.classList.toggle("lime-glow");
    })
});

// Make o's appear wherever you click
const body = document.querySelector("body");
body.addEventListener("click", function(e) {
    console.log(e.clientX);
    console.log(e.clientY);
    let newO = document.createElement("p");
    newO.textContent = "o";
    newO.style.fontWeight = "bold";
    newO.style.color = "purple";
    newO.style.position = "absolute";
    newO.style.left = `${e.clientX}px`;
    newO.style.top = `${e.clientY}px`;
    e.currentTarget.prepend(newO);
});