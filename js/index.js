// setup some hooks for the elements
const mainNav = document.querySelector(".main-navigation");
const mainNavTags = document.querySelectorAll("a");
const introImg = document.querySelector(".intro-img");
const funImg = document.querySelector(".fun-img");
const adventureHeading = document.querySelector(".adventure");
const freakyClick = document.querySelector(".freaky-click");
const imgDst = document.querySelector(".img-dst");


// add event listeners

// on scroll wheel event
document.addEventListener("wheel", (event) => {
    mainNav.style.backgroundColor = "#333";
    mainNav.style.color = "#fff";
    for(let i = 0; i < mainNavTags.length; i++) {

        mainNavTags[i].style.color = "#fff";
        mainNav.style.opacity = "0.5";
    }
});