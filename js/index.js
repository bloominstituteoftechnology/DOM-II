// Your code goes here

//1
const myTitle = document.querySelector('.logo-heading');

myTitle.addEventListener('mouseover', function(event) {
    // only has to deal with event bubbling
    event.stopPropagation();
    event.target.style.fontSize = "70px";
});



const myHome = document.querySelectorAll('.nav-link');

//2
myHome[0].addEventListener('mouseleave', function(event) {
    // only has toded deal with event bubbling
   // event.stopPropagation();
   event.preventDefault();
    event.target.style.color = "red";
    
});

//3
myHome[1].addEventListener('wheel', function(event) {
    // only has to deal with event bubbling
    event.preventDefault();
    event.stopPropagation();
    event.target.style.color = "blue";
});

//4
myHome[2].addEventListener('drag', function(event) {
    // only has to deal with event bubbling
    event.preventDefault();
    event.stopPropagation();
    event.target.style.color = "yellow";
});

//5
myHome[3].addEventListener('mouseenter', function(event) {
    // only has to deal with event bubbling
    event.preventDefault();
    event.stopPropagation();
    event.target.style.color = "green";
});

//6 
const myImg = document.querySelectorAll('img')
myImg[0].addEventListener('click', function(event) {
    // only has to deal with event bubbling
    event.stopPropagation();
    event.target.style.border = "10px solid green";
});

//7
myImg[1].addEventListener('dblclick', function(event) {
    // only has to deal with event bubbling
    event.stopPropagation();
    event.target.style.border = "10px solid blue";
});

//8
myImg[2].addEventListener('contextmenu', function(event) {
    // only has to deal with event bubbling
    event.stopPropagation();
    event.target.style.border = "10px solid purple";
});

//9
myImg[3].addEventListener('mouseover', function(event) {
    // only has to deal with event bubbling
    event.stopPropagation();
    event.target.style.border = "10px solid orange";
});

//10
const myEverything = document.querySelector('.home');
myEverything.addEventListener('mousedown', function(event) {
    //event.stopPropagation();
    event.target.style.backgroundColor = "red";
})

//Nested event
const myDestination = document.querySelector('.content-destination');
myDestination.addEventListener('mousedown', function(event) {
    event.stopPropagation();
    event.target.style.backgroundColor = "green";
    TweenMax.to(".home", 100, {rotation:1080, scale:50, x:150, ease:Power4.easeOut});
});

