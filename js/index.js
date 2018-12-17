// Your code goes here
//  MOUSEOVER
let nav = document.querySelectorAll("nav a");
for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("mouseover", () => {
        nav[i].style.color = "red";
    });

}

let h1 = document.querySelector("h1");
h1.addEventListener("mouseover", () => {
    h1.textContent = " HEADER 1";
})






//  KEYDOWN
let pageDown = document.querySelector("html");
pageDown.addEventListener("keydown", function (event) {
    pageDown = event.target;
    alert("keydown");

}, false);


// WHEEL 
let mouseScroll = document.querySelector("html");
mouseScroll.addEventListener("wheel", function (event) {
    mouseScroll = event.target;
    alert("scrolling");
})




//  RIGHTCLICK
let myButton = document.querySelector("html");
myButton.addEventListener("contextmenu", () => {
    alert("RIGHT CLICKED HERE ")
})




//  DBLCLICK
let doubleClick = document.querySelector("html");
doubleClick.addEventListener("dblclick", () => {
    alert("double clicked item!");
});


// CLICK
let imageClick = document.querySelector("img");
imageClick.addEventListener("click", () => {
    alert("DID YOU CLICK ME??");
});



let btnClick = document.querySelector(".btn");
btnClick.addEventListener("click", () => {
    alert("DID YOU CLICK THIS BUTTON??");
});











