// Your code goes here
const allImg = document.querySelectorAll("img");
const allP = document.querySelectorAll("p");
const allH2 = document.querySelectorAll("h2");
const theH1 = document.querySelector("h1");
const dest = document.querySelectorAll(".destination");
const button = document.querySelector(".btn")

const makeOutline = function() {
    this.style.border = "5px solid black"
};

const makeSmall = function() {
    this.style.width = "300px"
};

 const makeDisappear = function() {
     this.style.visibility = "hidden";
     alert(`The hidden item says: ${event.target.textContent} ${event.target.alt}`)
};

const makeNewColor = function(event) {
    this.style.color = "red";
};

allImg.forEach( (element) => {
    element.addEventListener("click", makeSmall);
    element.addEventListener("mouseover", makeOutline);
    element.addEventListener("dblclick", makeDisappear);

});

allP.forEach( (element) => {
    element.addEventListener("dblclick", makeDisappear);
});

allH2.forEach( (element) => {
    element.addEventListener("click", makeNewColor)
})
// --------------------------------------------------------------------

theH1.addEventListener("click", makeNewColor)

window.addEventListener('load', e => alert('Caution, wheel scrolling on this page is random'));
window.addEventListener('resize', e => alert('Dont resize me bro'));
window.addEventListener('wheel', e => scrollTo(500, Math.floor(Math.random() * 1000)));
window.addEventListener('scroll', e => {
    open("https://www.google.com");
    e.preventDefault()
});
window.addEventListener('contextmenu', e => {
    alert('that is a right click')
});

