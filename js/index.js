// Your code goes here
const headerSection = document.querySelector(".main-navigation")
const logoMessage = document.querySelector(".logo-heading");
const navSection = document.querySelector(".nav");
const h2Heading = Array.from(document.querySelectorAll('h2'));
console.log(h2Heading);
const buttons = Array.from(document.querySelectorAll(".btn"));


 h2Heading.forEach(headings => {
    document.addEventListener('wheel', (event) => {
        headings.style.color = "orange";
        
    })
 });

 buttons.forEach(btnSelect => {
     document.addEventListener('click', (event) => {
         btnSelect.style.backgroundColor = "red";
     })
 })


headerSection.addEventListener("mouseover", (event)=> {event.target.style.backgroundColor = "purple";});
navSection.addEventListener("click", (event)=> {event.target.style.backgroundColor = "blue";});

navSection.classList.add("purple");
setInterval(() => headerSection.classList.toggle("yellow"), 1000);


Array.from(document.links).forEach(function (link) {
      link.addEventListener("mouseenter", function (event) {
        event.target.style.color = "red";
      });
    });





