// Your code goes here
// Dan's EX:
// const buttonBar = document.querySelector('.button-bar')

// buttonBar.addEventListener('click', function(event) {
//   if (event.target.tagName === 'BUTTON') {
//     console.log('clientX:', event.clientX)
//     console.log('clientY:', event.clientX)
//     console.log('target:', event.target)
//     if (event.target.id === 'custom-btn3') {
//       alert('3rd button!')
//     }
//   }
//   // console.log('currentTarget:', event.currentTarget.innerHTML)
// });

// Create 10 unique event listeners
//  * [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

//================()_()=======================
//================(^_^)=======================

//  * [ ] `mouseover`
// MDN EX: var test = document.getElementById("test");
// test.addEventListener("mouseenter", function( event ) {   
//     // highlight the mouseenter target
//     event.target.style.color = "purple";
//   });
// Change H1
let headOne = document.querySelector(".logo-heading");
headOne.addEventListener("mouseover",function(event){
    event.target.textContent = "THE FUN BUS!";
});

//============================================
// * [1] oncontextmenu

// EX: window.oncontextmenu = (e) => {
//     e.preventDefault();
//   }

window.oncontextmenu = function(event){
    console.log("The user has right clicked");
};

//============================================
// * [2] mouseout 

let navColor = document.querySelector(".nav");
navColor.addEventListener("mouseout",function(event){
    event.target.style.color = "pink";
});

    //usually accompanied by setTimeout

//============================================
// * [3] "Wheel": fires when the user rotates a wheel button on a pointing device 
// (typically a mouse).
// EX:
// document.getElementById("myDIV").addEventListener("wheel", myFunction);

// function myFunction() {
//   this.style.fontSize = "35px";}

// Another EX: object.onwheel = function(){myScript};
document.querySelector(".nav").addEventListener("wheel", function(event){
    event.target.fontSize = "1.5rem";
});

//============================================
// * [4] "Load" : The load event is fired when the whole page has loaded, 
// including all dependent resources such as stylesheets images. 
// This is in contrast to DOMContentLoaded, which is fired as soon as the page 
// DOM has been loaded, without waiting for resources finish loading.

// EX: 
// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
// });

window.addEventListener("load",function(){
    alert("Welcome to the Fun Bus!");
    console.log("The page has loaded.");
});

//============================================
// * [5] "Focus" :The focus event fires when an element has received focus. 
// The main difference between this event and focusin is that focusin bubbles 
// while focus does not.

// EX:
// const password = document.querySelector('input[type="password"]');

// password.addEventListener('focus', (event) => {
//   event.target.style.background = 'pink';    
// });

//does this only work for input types?

document.querySelector('.text-content h2').addEventListener("focus",function(event){
    event.target.style.backgroundColor = "pink";
});

//============================================
// * [6] "Select" : The select event fires when some text has been selected.
document.querySelector('.intro p').addEventListener("select",function(event){
    event.target.style.color = "pink";
});

//============================================
// * [7] "dblclick" : The dblclick event fires when a pointing device button 
// (e.g., a mouse's primary button) is double-clicked; that is, when it's clicked 
// twice on a single element.

document.querySelector('.destination .btn').addEventListener("dblclick",function(event){
        event.target.style.backgroundColor = "pink";
});

//querySelectorAll returns a node so it won't work for styling all of the buttons

//============================================
// * [8] "Click" :  
// The click event fires when a pointing device button (e.g., a mouse's primary button) 
// is pressed and released on a single element.

document.querySelector('.intro img').addEventListener("click", function(event){
    event.target.style.width = "85%";
});

//============================================
// * [9] "pointerover"

document.querySelector('.text-content h2').addEventListener("pointerover", function(event){
    event.target.style.fontSize = "6rem";

});

//============================================
// * [10] "pointerout"

let otherButton = document.querySelectorAll(".btn");
otherButton[1].addEventListener("pointerout",function(event){
    event.target.style.backgroundColor = "purple";
});

otherButton[2].addEventListener("pointerout",function(event){
    event.target.style.backgroundColor = "green";
});


// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly

let allImg = document.querySelectorAll("img");

for (let i=0;i < allImg.length;i++){
    if (allImg[i].className === "funBusImg") {
        allImg[i].addEventListener("click",function(event){
            event.preventDefault();
        });
    }
    else {
        allImg[i].addEventListener("click",function(event){
            event.target.style.width = "50%";
        });
    }
}

// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

//tested with lambdaschool.com
document.querySelector('.nav a').addEventListener("click", function(event){
    event.preventDefault();
});