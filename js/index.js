// Your code goes here
const headerSection = document.querySelector(".main-navigation")
const logoMessage = document.querySelector(".logo-heading");
const navSection = document.querySelector(".nav");

headerSection.addEventListener("mouseover", (event)=> {event.target.style.backgroundColor = "purple";});
navSection.addEventListener("click", (event)=> {event.target.style.backgroundColor = "blue";});

navSection.classList.add("purple");
setInterval(() => headerSection.classList.toggle("purple"), 1000);


Array.from(document.links).forEach(function (link) {
      link.addEventListener("mouseenter", function (event) {
        event.target.style.color = "red";
      });
    });





