// Your code goes here
const allImg = document.querySelectorAll("img");
const allP = document.querySelectorAll("p");
const allH2 = document.querySelectorAll("h2");
const theH1 = document.querySelector("h1");

const makeOutline = function() {
    this.style.border = "5px solid black"
};

const makeSmall = function() {
    this.style.width = "300px"
};

 const makeDisappear = function() {
     this.style.visibility = "hidden";
     alert(`The hidden item says: ${event.target.textContent}`)
};

const makeNewColor = function(event) {
    this.style.color = "red";
    event.stopPropagation();
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