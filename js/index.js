// Your code goes here

const title = document.querySelector("header h1");
const busImg = document.querySelector(".home img");
const mapImg = document.querySelector(".img-content")
const inverseMapImg = document.querySelector(".inverse-content .img-content");
const text = document.querySelector(".content-section p");
const welcomeP = document.querySelector("header p");
const anchor = document.querySelector("a");

anchor.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("it worked")
});

title.addEventListener("click", function(e) {
    e.target.style.fontSize = "100px";
    e.target.style.padding = "10px";
});

title.addEventListener("dblclick", function(e) {
    e.target.style.fontSize = "4rem";
});

busImg.addEventListener("mousedown", function(e) {
    e.target.style.height = "350px";
});

busImg.addEventListener("mouseup", function(e) {
    e.target.style.height = "240px";
});

mapImg.addEventListener("mouseover", function(e) {
    e.target.style.height = "500px";
    e.target.style.width = "500px";
});

inverseMapImg.addEventListener("mouseout", function(e) {
    e.target.style.height = "500px";
    e.target.style.width = "500px";
});

text.addEventListener("contextmenu", function(e) {
    e.target.style.color = "red";
});

text.addEventListener("mouseenter", function(e) {
    e.stopPropagation();
    e.target.style.color = "purple";
});

welcomeP.addEventListener("mouseleave", function(e) {
    e.stopPropagation();
    e.target.style.fontSize = "4rem";
});

welcomeP.addEventListener("wheel", function(e) {
    e.target.style.fontSize = "2rem";
});



