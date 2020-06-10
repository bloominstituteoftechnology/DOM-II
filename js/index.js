// Your code goes here

//alert when first load 
// const loadTest = addEventListener("load",() =>{
// alert("Welcome to my Experiment !");
// });

//mouse hover Fun bus change font
const h1Edit = document.querySelector("h1");
h1Edit.addEventListener("mouseenter",( )=>{
h1Edit.style.fontSize = "6.8rem";
});

//mouse leaves Fun bus element shrinks font
h1Edit.addEventListener("mouseleave", () => {
    h1Edit.style.fontSize = "4rem";
});

//black background white texts when key is pressed
const bodybgEdit = document.querySelector("body");
bodybgEdit.addEventListener("keydown",() =>{
bodybgEdit.style.backgroundColor = "black";
bodybgEdit.style.color = "white";
h1Edit.style.color = "black";
});

//revert changes when key released
bodybgEdit.addEventListener("keyup",(e) =>{
    bodybgEdit.style.backgroundColor = "white";
    bodybgEdit.style.color = "black";
    e.stopPropagation();
});

//forEach btns on click change bg color
const btnEdit = document.querySelectorAll(".btn");
 btnEdit.forEach(btnbg => {

btnbg.addEventListener("click",() => {
    
    btnbg.style.backgroundColor = "pink";
    btnbg.style.color = "red";
    btnbg.textContent = "Signing Up! Please wait";
});
});

//wheel on images
const imgEdit = document.querySelectorAll("img");
imgEdit.forEach(images =>{
    images.addEventListener("wheel",() =>{
    
    images.style.transform = "scale(1.1)";
    images.style.transition = "transform 1s";
    });
});

//double click nav a tags
const navEdit = document.querySelectorAll("a");
navEdit.forEach(navA =>{
    navA.addEventListener("dblclick",(e) =>{
    navA.style.color = "red";
    e.preventDefault();
    });
});

//contextmenu i guess filler ?
const h2Edit = document.querySelector("h2");
h2Edit.addEventListener("contextmenu", (e) =>{
    h2Edit.style.color = "red";
    h2Edit.style.fontSize = "20px";
    e.preventDefault();
});

//another filler 
const footerEdit = document.querySelector(".footer");
footerEdit.addEventListener("scroll",(e) =>{
footerEdit.style.backgroundColor = "pink";
});

const headerEdit = document.querySelector(".header");
headerEdit.addEventListener("keydown",(e) =>{
headerEdit.style.backgroundColor = "black";
});
