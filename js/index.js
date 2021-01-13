
// Selectors
const body = document.querySelector("body");

// Nav link selectors
const nav1 = document.querySelector("nav a");
const nav2 = nav1.nextElementSibling;
const nav3 = nav2.nextElementSibling;
const nav4 = nav3.nextElementSibling;
// fun bus nav
const funBus = document.querySelector(".logo-heading")

// Img selectors
const header = document.querySelector(".intro");
const headerImg = header.querySelector("img");
const destination = document.querySelector(".content-destination");
const destImg = destination.querySelector("img");
const letsGo = document.querySelector(".content-section");
const letsGoImg = letsGo.querySelector("img");


// Text selector
const introText = document.querySelector(".intro");
const welcomeText = introText.querySelector("h2");





//home hover
nav1.addEventListener("mouseover", function(event) {
    event.target.style.color = "red"

    setTimeout(function() {
        event.target.style.color = "";
      }, 1000);

});

//about us click
nav2.addEventListener("click", function(event) {
    if (body.style.color  === "blue"){
        body.style.color = "";
    } else body.style.color = "blue"
});

//blog button zoom
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    nav3.style.transform = `scale(${scale})`;
}
scale = 1;
nav3.onwheel = zoom;

//scroll
document.addEventListener("scroll", function(event) {
    body.style.backgroundColor = "gray";
});

//keydown anywhere to make img disappear
document.addEventListener("keydown", function(event){
    headerImg.style.opacity = 0;
});
//keyup to make img appear with low opacity
document.addEventListener("keyup", function(event){
    headerImg.style.opacity = 0.5;
});

//fun bus double click
funBus.addEventListener("dblclick", function(event) {
    funBus.textContent = "Double Fun Bus";
});

//destination img mouseleave
destImg.addEventListener("mouseleave", function(event) {
    body.style.backgroundColor = "white";
});

//mouseup on lets go img
letsGo.addEventListener("mouseup", function(event) {
    body.style.backgroundColor = "green";
});

//winow resize
window.onresize = function(){
    body.style.color = "pink";
    body.style.backgroundColor = "black";
}