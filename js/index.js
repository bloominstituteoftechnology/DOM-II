// Your code goes here
const headerSection = document.querySelector(".main-navigation")
headerSection.addEventListener("mouseover", (event)=> {event.target.style.backgroundColor = "purple";});


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



navSection.addEventListener("click", (event)=> {event.target.style.backgroundColor = "blue";});

navSection.classList.add("purple");
setInterval(() => headerSection.classList.toggle("yellow"), 1000);


Array.from(document.links).forEach(function (link) {
      link.addEventListener("mouseenter", function (event) {
        event.target.style.color = "red";
      });
    });

window.onload = function(event){
    console.log(`onload event ${event, type}`);
}

window.addEventListener("load", event => {
    console.log( `${event.type}`)
})

const theButton = document.querySelector(".btn");

theButton.onclick = function (event) {
    console.log(`event that happened: ${event.type}`)
}

theButton.addEventListener("click", event => {
    console.log(`Events taking place: ${event.type} on the ${event.target.nodeType}`)
})

theButton.addEventListener('click', event => {
    console.log("about to change the DOM")
    // event.target.style.backgroundColor = 'green'
})

function listener(event) {
    console.log(`event passing through: ${event.currentTarget.nodeName}`)
}

theButton.addEventListener(`click`, listener);
