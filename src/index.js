import './less/index.less'

// Your code goes here!
console.log("Console is working");

const logoHeading = document.querySelector("h1.logo-heading");
const busLogoHeading = document.querySelector("h1.bus-logo-heading");
const busImg = document.querySelector(".intro img");
const introText = document.querySelector(".intro h2");
const introImg = document.querySelector(".intro img");
const AAImgContent = document.querySelector(".img-fluid");
const LGImgContent = document.querySelector(".img-content img");
const FooterImgContent = document.querySelector(".content-destination img");
const mainPage = document.querySelector(".container.home");
const wholePage = document.querySelector("body");
const SMEBtns = document.querySelector(".btn");

// turns bus logo on with dblclick
logoHeading.classList.remove("off");
function change() {
    busLogoHeading.classList.remove("off");
    logoHeading.classList.add("off");
}
busImg.addEventListener("dblclick", change);

// turns intro h2 text orange when hovering
function changeColor() {
    introText.style.color = 'orange';
}
introText.addEventListener("mouseover", changeColor);

// turns all the intro pictures into different ones when F12 is pressed
function changeImage(event) {
    if (event.key === "F10") {
        AAImgContent.src = 'https://i.pinimg.com/originals/66/40/78/664078fe059378f473c1d6fa002b0dc0.jpg';
        LGImgContent.src = 'https://i.pinimg.com/originals/66/40/78/664078fe059378f473c1d6fa002b0dc0.jpg';
        FooterImgContent.src = 'https://i.pinimg.com/originals/66/40/78/664078fe059378f473c1d6fa002b0dc0.jpg';
        introImg.src = 'https://i.pinimg.com/originals/66/40/78/664078fe059378f473c1d6fa002b0dc0.jpg';
    }
}
document.addEventListener("keydown", changeImage);

// turns the background a different color when the wheel scrolls down
function changeBackground() {
    mainPage.style.backgroundColor = "lightblue";
}
document.addEventListener("wheel", changeBackground);

// changes page color when you load the page
function changePageColor() {
    wholePage.style.backgroundColor = "lightyellow";
}

window.addEventListener("load", changePageColor);

// changes images when "Sign Me Up!" is clicked
function convertImages() {
    AAImgContent.src = "https://i.pinimg.com/550x/a5/25/f2/a525f24c31e309e603358a8bc478e8ea.jpg";
    LGImgContent.src = "https://i.pinimg.com/550x/a5/25/f2/a525f24c31e309e603358a8bc478e8ea.jpg";
    FooterImgContent.src = "https://i.pinimg.com/550x/a5/25/f2/a525f24c31e309e603358a8bc478e8ea.jpg";
    introImg.src = "https://i.pinimg.com/550x/a5/25/f2/a525f24c31e309e603358a8bc478e8ea.jpg";
}
SMEBtns.addEventListener("click", convertImages);

// home button takes you to a different site than usual
document.getElementById('home').addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "https://www.whitehouse.gov/";
});