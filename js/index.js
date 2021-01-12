
// Selectors
const body = document.querySelector("body");

// Nav link selectors
const nav1 = document.querySelector("nav a");
const nav2 = nav1.nextElementSibling;
const nav3 = nav2.nextElementSibling;
const nav4 = nav3.nextElementSibling;

// Img selectors
const header = document.querySelector("header");
const headerImg = header.querySelector("img");

// Text selector
const text = document.querySelector("p")

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

//selecting 
text.addEventListener("select", function(event) {
    text.style.color = "orange";
});