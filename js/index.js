const navBar = document.querySelector("nav");
console.log(navBar);

navBar.addEventListener("mouseenter", function(event) {
    event.target.style.color = "red";

setTimeout(function() {
    event.target.style.color = "";
}, 500);
}, false);

navBar.addEventListener("mouseover", function(event) {
    event.target.style.color = "blue";

setTimeout(function() {
    event.target.style.color = "";
}, 1000);
}, false);

navBar.addEventListener("mmouseover", function(event) {
    event.target.style.color="green"
} )