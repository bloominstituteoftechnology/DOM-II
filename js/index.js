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

// mouse over and mouse leave event listeners
introImg.addEventListener("mouseover", (event) => {
    introImg.src = "../img/fun-bus-invert.jpg";
});

introImg.addEventListener("mouseleave", (event) => {
    introImg.src = "../img/fun-bus.jpg";
});

// on click and mouse over event
funImg.addEventListener("mouseover", (event) => {
    funImg.addEventListener("click", (event) => {
        funImg.src = "../img/fun-over.jpg";
        adventureHeading.innerText = "Blood Awaits";
        var audio = new Audio('/js/noo.mp3');
        audio.play();
    });
    event.target.style.cursor = "pointer";
});


