// Your code goes here

const yellowbus = document.querySelector(".intro img");

yellowbus.addEventListener("mouseover", function(event) {
    yellowbus.style.border="1px solid blue";
})




const home = document.querySelector("body");

home.addEventListener('keydown', function(event) {
    home.classList.toggle("goblue");
});



const midImg = document.querySelector(".content-destination img");

midImg.addEventListener('contextmenu', function(event) {
    midImg.classList.toggle("displayNone");
});


const title = document.querySelector(".logo-heading");

title.addEventListener('wheel', function(event) {
    title.style.color = 'red';
    title.style.fontSize = "5rem"
  });



const nav = document.querySelector(".main-navigation");

nav.addEventListener('dblclick', function(event) {
    nav.classList.toggle("goBluer");
});



const all = document.querySelector('html');

all.addEventListener('click', function(event) {
    event.target.style.color = 'purple';
  });




const footer = document.querySelector("footer");

window.addEventListener('resize', function(event) {
    footer.classList.toggle("goRed");
});





const welcome = document.querySelector(".intro h2");

welcome.addEventListener("mouseover", function(event) {
    welcome.classList.toggle("goGreen");
});