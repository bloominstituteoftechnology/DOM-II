const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

let grayBlockTraveler = grayBlock.style.marginLeft;

grayBlock.addEventListener("mousedown", (event) =>{
        grayBlock.style.transform = "translate(900px, 0%)"
});
grayBlock.addEventListener("mouseup", (event) =>{
    grayBlock.style.transform = null;
   
});

