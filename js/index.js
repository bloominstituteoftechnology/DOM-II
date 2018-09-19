let logoHeading = document.querySelector('.logo-heading');
let navLink = document.querySelectorAll('.nav-link');
let container = document.querySelector('.container');
let home = document.querySelector('.home');
let nav = document.querySelector('.nav-container');

// prevent default anchor tag click refresh
const links = document.querySelectorAll("a");
links.forEach(link =>
  link.addEventListener("click", event => {
event.preventDefault();
  })
);

// 1. display really pleasant alert on document load
window.addEventListener("load", function(event) {
  this.alert('Here\'s an annoying pop-up!');
});


// 2. Border entire page upon window resize
let body = document.querySelector('body');
window.addEventListener('resize', (e) => {
  body.classList.add('resize');
});


// 3. turn header image b&w upon mouseOver
let headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseover', (e) => {
  headerImg.classList.add('blackAndWhite');
});


// 4. Display scroll position vs scroll height
let last_known_scroll_position = 0;
let ticking = false;

function scrollCoord(scroll_pos) {
  let scrollY = last_known_scroll_position;
  //determine entire document height 
  let scrollHeightTotal = document.body.scrollHeight;
  //display coords
  let scrollBox = document.querySelector('.xycoords');
  scrollBox.innerText = `Y: ${scrollY} / ${scrollHeightTotal}`;
}
window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      scrollCoord(last_known_scroll_position);
      ticking = false;
    });
     
    ticking = true;
  }
});

// 5. When the letter R is keypressed, the body will change to a yellow/green background color.
document.addEventListener("keypress", e => {
  if(e.keyCode === 82) {
      console.log(e.keyCode);
      home.style.background = "yellowgreen";
  }
}); 



// 6. Uppercase entire page's text on doubleclick
// let body = document.querySelector('body');
window.addEventListener('dblclick', (e) => {
  body.classList.add('uppercase');  
});


// 8. Bus will rotate ominously upon mouseout
let bus = document.querySelector('.home .intro img')
bus.addEventListener('mouseout', (e) => {   
  bus.classList.add('rotate');
});


// 9. Nav changes color on wheel event
window.addEventListener('wheel', () => {
	nav.style.background = '#FFEBCD';
});

// 10. Good ol fashioned click event on images
let img = document.querySelector('img');
img.addEventListener('click', () => {
  img.classList.add('scale');
});