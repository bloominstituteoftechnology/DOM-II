// Your code goes 

//Mouseover
let navigation = document.querySelector(".nav-link");
navigation.addEventListener("mouseover", mice);
function mice(){
    document.querySelector(".nav-link").style.color = "orange";
}


//Double Click
let destination = document.querySelectorAll(".destination p");
destination.addEventListener("dblclick", double);
function double() {
    document.querySelectorAll(".destination p").innerHTML = "You Deserve It!";
}
destination.forEach(txt => txt.textContent = "You Deserve It!");

//Resize
function size() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementsByClassName(".container-home").innerHTML = txt;
}

//Afterprint
window.addEventListener("afterprint", print);

function print() {
    console.log("We Are Printing");
}

//Wheel
document.querySelector(".header-intro p").addEventListener("wheel", circle);

function circle() {
    this.style.fontSize = "30px";
}

//Key Down
document.getElementsByClassName(".btn").addEventListener("keydown", keys);
function keys() {
    document.getElementsByClassName(".btn").style.backgroundcolor = "black";
}

//Load
document.querySelector("body").addEventListener("body", loading);
function loading(){
    alert("Locked and Loaded");
}

//Scroll
document.querySelector(".text-content p").addEventListener("scroll", myFunction);
function myFunction() {
    document.querySelector(".text-content p").innerHTML = "They see me scrolling"
}

//Dragging
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementsByClassName(".img-fluid rounded").innerHTML = "Drag This";
}

function dragEnd(event) {
    document.getElementsByClassName("img-fluid rounded").innerHTML = "All Done";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}
//Prevent Default
document.getElementsByClassName(".nav").addEventListener("click", function(navigation) {
    navigation.preventDefault()
});
