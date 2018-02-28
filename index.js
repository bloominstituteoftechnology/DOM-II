const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");


grayBlock.addEventListener("click", (event) =>{
    grayBlock.style.order = "1";
    redBlock.style.order = "5";
    pinkBlock.style.order = "4";
    greenBlock.style.order = "3";
    blueBlock.style.order = "2";
});

pinkBlock.addEventListener("click", (event) =>{
    grayBlock.style.order = "4";
    redBlock.style.order = "5";
    pinkBlock.style.order = "1";
    greenBlock.style.order = "3";
    blueBlock.style.order = "2";
});

greenBlock.addEventListener("click", (event) =>{
    grayBlock.style.order = "3";
    redBlock.style.order = "5";
    pinkBlock.style.order = "4";
    greenBlock.style.order = "1";
    blueBlock.style.order = "2";
});

pinkBlock.addEventListener("click", (event) =>{
    grayBlock.style.order = "4";
    redBlock.style.order = "5";
    pinkBlock.style.order = "1";
    greenBlock.style.order = "3";
    blueBlock.style.order = "2";
});

redBlock.addEventListener("click", (event) =>{
    grayBlock.style.order = "5";
    redBlock.style.order = "1";
    pinkBlock.style.order = "4";
    greenBlock.style.order = "3";
    blueBlock.style.order = "2";
});
blueBlock.addEventListener("click", (event) =>{
    grayBlock.style.order = "5";
    redBlock.style.order = "2";
    pinkBlock.style.order = "4";
    greenBlock.style.order = "3";
    blueBlock.style.order = "1";
});