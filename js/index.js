// Your code goes here
const headerImg = document.querySelectorAll("img")[0];
const nextImg = document.querySelectorAll("img")[1];

const makeOutline = function() {
    this.style.border = "3px solid red"
};
const makeSmall = function() {
    this.style.width = "300px"
};

headerImg.addEventListener("click", makeSmall);
headerImg.addEventListener("mouseover", makeOutline);
headerImg.adddEventListener("onkeydown")

nextImg.addEventListener("click", makeSmall);
nextImg.addEventListener("mouseover", makeOutline);


// ----------------------------------------------------------------------

