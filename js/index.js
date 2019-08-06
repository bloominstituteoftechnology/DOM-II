// Your code goes here
const allImg = document.querySelectorAll("img");
const allP = document.querySelectorAll("p");

const makeOutline = function() {
    this.style.border = "5px solid black"
};

const makeSmall = function() {
    this.style.width = "300px"
};

 const makeDissapear = function() {
     this.style.visibility = "hidden"
};

allImg.forEach( (element) => {
    element.addEventListener("click", makeSmall);
    element.addEventListener("mouseover", makeOutline);
    element.addEventListener("dblclick", makeDissapear);

});


allP.forEach( (element) => {
    element.addEventListener("dblclick", makeDissapear);
});

// --------------------------------------------------------------------

