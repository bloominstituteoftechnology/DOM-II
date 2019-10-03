// Your code goes here

//Turning the "home" anchor red
let navButton = document.getElementsByClassName("nav-link");

navButton[0].addEventListener('click', function(e) {
  navButton[0].style.color = "red";
    })

//Using mouseover to add img border
let imgBorder = document.querySelector("#bus-pic")

imgBorder.addEventListener('mouseover', function(){
imgBorder.style.border = "1px solid black";
})

//Using mouseout to remove border
imgBorder.addEventListener('mouseout', function(){
    imgBorder.style.border = "0px solid white";
    })


//Using dblclick to change background color
let background = document.getElementsByTagName("body")

background[0].addEventListener('dblclick', function(){
    background[0].style.backgroundColor = "cadetblue";
})

//Expands the pick your destination img with a mouseover
let imgGrower = document.querySelector(".content-destination");
let imgGrow = document.querySelector(".content-destination img");

imgGrower.addEventListener("mouseover", e => {
    imgGrower.style.width = "100%";
    imgGrow.style.width = "100%";
})

//Returns destination img to normal size with mouseout
imgGrower.addEventListener("mouseout", e => {
    imgGrower.style.width = "75%";
    imgGrow.style.width = "100%";
})

//gives the h1 a gray background color when you hold alt and click on it
let h1Pointer = document.querySelector(".main-navigation h1")

 let keyClick = function(e) {
     pointer.style.backgroundColor = "lightgray";
     }
h1Pointer.addEventListener('click', keyClick)

//uses wheel event to turn the "welcome to fun bus" green
let h2Pointer = document.querySelector(".intro h2")

h2Pointer.addEventListener('wheel', function(){
  h2Pointer.style.color = 'green';
})

//resizes the copyright in the footer to 3rem when copyright is copied to the clipboard
let copyright = document.querySelector(".footer p")
copyright.addEventListener("copy", function(){
    copyright.style.fontSize = "3rem";
})

//turns the .intro p pink when any non leftclick mouse button is hit with auxclick
let text = document.querySelector(".intro p")

text.addEventListener("auxclick", function(){
    text.style.color = "pink";
})