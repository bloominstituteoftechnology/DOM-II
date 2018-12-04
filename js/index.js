// Your code goes here

let home = document.querySelector(".home");
let introScreen = document.querySelector(".intro-screen");
let introText = introScreen.querySelector("p");



window.addEventListener("load", function(e) {
    home.style.display = "none";
    introScreen.style.display = "flex";
    introScreen.style.margin = "250px auto";
    introScreen.style.justifyContent = "center";
    introText.style.fontSize = "4rem";
    introText.style.border = "2px dashed #C0C0C0";
    introText.style.padding = "20px";

    introText.addEventListener('click', function(e) {
        e.stopPropagation();
        introScreen.style.display = "none";
        home.style.display = "block";
    });
});

let navLinks = document.querySelectorAll('.nav-link');
for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', function() {
        navLinks[i].style.color = "#F9E1D1";
        navLinks[i].style.fontWeight = "bold";
    });

    navLinks[i].addEventListener('mouseout', function() {
        navLinks[i].style.color = "#212529";
        navLinks[i].style.fontWeight = "normal";
    });
}