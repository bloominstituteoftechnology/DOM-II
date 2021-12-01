//./less/index.less'

//const e = require("express");

// Your code goes here!

// 1.) MOUSEOVER EVENT changes text of "Fun Bus" on hover
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener('mouseover', (event) => {
    event.target.innerHTML = 'Bad Bus';
        setTimeout(function() {
        event.target.innerHTML = 'Fun Bus';
    }, 500);
}, false); 

//2.) CLICK EVENT changes nav bar to red on 

const xc = document.querySelector('nav');
xc.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
})

//3. ZOOM EVENT makes bus photo bigger or smaller
const busPocc = document.querySelector('.intro img'); 

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    busPocc.style.transform = `scale(${scale})`;
  }
  let scale = 1;
busPocc.addEventListener('wheel', zoom);

//4 and 5 KEYUP EVENT and KEYDOWN EVENT - random color on key press in body

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
 keyPress.style.backgroundColor = bgColor }

const keyPress = document.querySelector("body")
keyPress.addEventListener('keydown',random_bg_color)


const keyPressUp = document.querySelector("body");
keyPressUp.addEventListener('keyup' , () =>{
    keyPressUp.style.backgroundColor = null
})

//6 RESIZE EVENT - changes h2 element to report window size.

const heightOutput= document.querySelector(".text-content h2")


function reportWindowSize() {
  heightOutput.textContent = ` Window height is ${window.innerHeight}. Double Click to return to orinal text`;
}

window.onresize = reportWindowSize;

//7 DOUBLECLICK EVENT - returns above h2 to oringal text on double click


const original= document.querySelector(".text-content h2")  
original.addEventListener('dblclick', () =>{
    original.textContent = "Let's Go!"
})


//8 and 9 MOUSEENTER and MOUSELEAVE events. Changes all text in p's to italices when mouse enters like hover
// changes all text back to normal when mouse "leaves"

const focus  = document.querySelectorAll('p');

focus.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        el.style.fontStyle = "italic"
    })

    el.addEventListener('mouseleave', () => {
        el.style.fontStyle = "normal"
    })
});


//10 and 11  MOUSEUP and MOUSEDOWN events. Changes background color of h4's to blue on down click, back
//to white on release or mouseup 

const mouseDownUp = document.querySelectorAll("h4");

mouseDownUp.forEach((down)=>{
    down.addEventListener('mousedown', () => {
        down.style.backgroundColor = "blue";
    })
    down.addEventListener('mouseup', () => {
        down.style.backgroundColor = "white";
    })
});







