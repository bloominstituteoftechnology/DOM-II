// This is alerting "Hello World when the first H2's is mousedover"
const h2Elements = document.querySelectorAll("h2");
h2Elements[0].addEventListener("mouseover", h2);
function h2() {
  alert ("Hello World!");
}


// This turns the .logo-heading bluse when clicked 
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("click", logo);
function logo() {
    logoHeading.style.color = "blue"
}

// This turns the entire text on the page red
const entirePage = document.querySelector("body");
entirePage.addEventListener("keydown", body);
function body() {
  entirePage.style.color = "red"
}

// This will alert "DOM is ready" When I refresh the page
function ready(){alert('DOM is ready');}
document.addEventListener('DOMContentLoaded', ready);

// This will turn .text-content orange when hovered
const text = document.querySelector(".text-content")
text.addEventListener("mouseendter", mouse)
function mouse(){
    text.style.color ="orange"
}

// This will tun my a link (Home) red when i scroll
const nav = document.querySelector("a");
window.addEventListener('scroll', (e) => (nav.style.color = "red"))

