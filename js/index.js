// Your code goes here
//  MOUSEOVER
let nav = document.querySelectorAll("nav a");
for (let i = 0; i < nav.length ; i++) {
    nav[i].addEventListener("mouseover", () => {
        nav[i].style.color = "red";
    });

}


//  KEYDOWN
let pageDown = document.getElementsByTagName("html");
document.addEventListener("keydown", function(event) {
    pageDown = event.target;
    alert("keydown");

}, false);


// WHEEL 
let mouseScroll = document.getElementsByTagName("html");
document.addEventListener("wheel", function(event) {
    mouseScroll = event.target;
   alert("scrolling");
})

// Drag and Drop 
let moveItem = document.getElementsByTagName("img");
document.addEventListener("drag / drop", function(event) {
    moveItem = event.target;
    alert('cannot drag item!');
})


//  RIGHTCLICK
let tracker = document.getElementById("img");
document.addEventListener("mouseover", function(event) {
    tracker = event.target;
    alert ("RIGHT CLICKED HERE ")
})
 

// MOUSEDOWN



//  DBLCLICK
let doubleClick = document.querySelector("btn");
document.addEventListener("dblclick", () => {
    alert ("double clicked item!");
});
