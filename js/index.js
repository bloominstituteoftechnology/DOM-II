// ELEMENT SELECTORS 
const header = document.querySelector("header"); 
const logo = header.querySelector("h1"); 
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const footerPara = footer.querySelector("p")
const textContent = document.querySelector(".text-content");
const contentDestination = document.querySelector(".content-destination");
const destination = contentDestination.querySelector("h2")
//EventListeners

// mouseenter/out 
logo.addEventListener("mouseenter", event => {
event.target.style.fontSize = "5em";
event.target.style.transitionDuration = "1s";
});

logo.addEventListener("mouseout", event => {
    event.target.style.fontSize = "4em";
    event.target.style.transitionDuration = "2s";
});

// keydown/up event 
document.addEventListener("keydown", event =>{
if (event.key === "p"){
    body.style.color="#7970a1";
}
});

document.addEventListener("keyup", event =>{
    if (event.key === "p"){
        body.style.color="black";
    }
    });

// wheel event 

textContent.addEventListener("scroll", event => {
    this.style.color = "pink";
    });

// load 
destination.addEventListener("load", event => {
    event.target.style.color ="blue";
})

destination.addEventListener("dblclick", event => {
    event.target.style.color ="red";
})

// CONSOLE CHECK ====== 
console.log(destination)

