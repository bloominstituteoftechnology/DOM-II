// Your code goes here

// BUS ICON (HEADER)
const myImg = document.createElement("img");

myImg.src = "https://img.icons8.com/color/50/000000/tour-bus.png";

myImg.style.width = "75px";
document.body.prepend(myImg);
myImg.style.transition = "all 1s";

setInterval(() => {
    const x = Math.floor(document.body.clientWidth * Math.random())
    myImg.style.transform = `translate(${x}px)`;
},2000)


// LOGO STYLES
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "60px";
    event.target.style.color = "red";
    event.target.textContent = "FUN BUS!!!!";

    setTimeout(function () {
        event.target.style.fontSize = "40px";
        event.target.style.color = "black";
    }, 500);
}, false);


// NAVBAR STYLES
const navBar = document.querySelector(".nav");

navBar.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "2.6rem";
    event.target.style.color = "red";

    setTimeout(function () {
        event.target.style.fontSize = "1.6rem";
        event.target.style.color = "black";
    }, 500);
}, false);

//H2's
const h2s = document.querySelector("h2");

h2s.addEventListener("mouseover", function (event) {
    event.target.style.color = "red";
  

});

