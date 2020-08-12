//1 Click Nav bar

const nav = document.querySelector('.nav');
nav.addEventListener('click', (event) => {
  alert('Still under construction!')
})

// 2 Mouseover Navigation links red hover
const navA = document.querySelectorAll('nav a');

navA.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.color = 'red';
        setTimeout(function () {
            event.target.style.color = 'black';
        }, 500);
    }, false)
});

// 3 Double Click Image 
const card = document.getElementById('img-content');

card.addEventListener('dblclick', function (event) {
  event.target.style.transform = 'scale(1.5)';
  setTimeout(function () {
      event.target.style.transform = 'scale(1.0)';
  }, 500);
}, false)
// Stop Propogation Solid black boarder on the double clicked image
const advAwaits = document.getElementById('img-content');

advAwaits.addEventListener("click", (event)=>{
    event.stopPropagation()
    event.target.style.border = "2px solid black"
});


// 4 Wheel Top Image
const Img = document.querySelector('img');
Img.addEventListener('wheel', zoom);
let scale = 1;

function zoom(event){
	event.preventDefault();
	scale += event.deltaY * -0.0001; 
          // Restrict scale
          scale = Math.min(Math.max(.85, scale), 1.15);
        
          // Apply scale transform
          Img.style.transform = `scale(${scale})`;
};

// 5  Resize Titles with red bar
const hTwo = document.querySelectorAll('h2');

window.addEventListener('resize', function(){
hTwo.forEach((newStyle) => {
    newStyle.style.backgroundColor = 'Red';
    newStyle.style.paddingLeft = '4%';
    newStyle.style.paddingTop = '2%';
    newStyle.style.borderRadius = '4px';
});
});

// 6  Mouse Enter Island Getaway
const h4 = document.getElementById("Island");
h4.addEventListener("mouseenter", function( event ) {   
  event.target.style.color = "Red";
  setTimeout(function() {
    event.target.style.color = "Black";
  }, 500);
}, true);

// 7 Scroll Keeps nav bar on the screen while scrolling
const mainHead = document.querySelector('.main-navigation');
const bottomContent = document.querySelectorAll('.destination');

function navFadeOnScroll() {
    mainHead.style.opacity = ".5";
    bottomContent.forEach((bg) => {
        bg.style.backgroundColor = 'white';
        bg.style.opacity = '.8';
        bg.style.padding = '2%';
        bg.style.borderRadius = '5px';
        bg.style.margin = '1%';
        bg.style.fontWeight = 'bold';
    });
};

document.addEventListener("scroll", navFadeOnScroll);

// 8 Mouse Down  Fun Bus color changes to red when mouse pointer is pushed down click.
const logo = document.querySelector('.logo-heading')
logo.addEventListener('mousedown', function(event) {
    event.target.style.color = "red";
});

// 9 Mouse Leave  Color reverts back when mouse leaves 'Fun Bus'
const logoRevert = document.querySelector('.logo-heading')
logoRevert.addEventListener('mouseleave', function(event) {
    event.target.style.color = "black";
});

// 10 Changes the size of FUN IN THE SUN div class per mouse movement over div class destination
const logo2 = document.querySelector('.destination')
logo2.addEventListener('mousemove', function(event) {
    event.target.style.transform = 'scale(1.2)';
    setTimeout(function () {
        event.target.style.transform = 'scale(1.0)';
    }, 500);
}, false);

// Stop Nav Items from default action
navA.forEach((navA) => {navA.addEventListener('click', function (event) {
    event.preventDefault()
});
});
