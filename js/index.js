// Your code goes here
// `mouseover`
const boldLink = document.querySelector('.logo-heading');
boldLink.addEventListener('mouseover', (event) => {
  //event.preventDefault();  
  event.target.style.fontFamily = 'Verdana, serif';

  setTimeout(function () {
    event.target.style.fontFamily = "";
  }, 500);
}, false);

// `keydown`
//didn't listen to keydown because imgs dont have focus?
const keydown = document.querySelector('input')
keydown.addEventListener('keydown', (event) => {
  // event.stopPropagation(); 
  event.target.style.background = 'red';
})

// `copy`
//only works in textarea and input
const selection = document.querySelector('input')
selection.addEventListener('copy', (event) => {
  alert('You made a selection, bro!')
}, false)

// `dblclick`
const firstButton = document.querySelectorAll('.btn')
firstButton[0].addEventListener('dblclick', (event) => {
  event.target.style.border = '2px dotted purple'

  setTimeout(function () {
    event.target.style.display = "";
  }, 500);
})

//on click
const midButton = document.querySelectorAll('.btn');
midButton[1].addEventListener('click', (event) => {
  event.target.style.display = 'none'

  setTimeout(function () {
    event.target.style.display = "";
  }, 1000);
})

//keypress
const keypress = document.querySelector('input')
keypress.addEventListener('keydown', (event) => {
  // event.stopPropagation(); 
  event.target.style.color = 'orange';
})

//contextmenu
const contextmenu = document.querySelector('.intro p')
contextmenu.addEventListener('contextmenu', (event) => {
  //text.target.style.innerHTML = "You did it!"
  event.target.style.fontSize = "30px"

  setTimeout(function () {
    event.target.style.fontSize = "";
  }, 1000);
})

//scroll
//works but only sometimes. Trying to figure it out
//scroll only affects window or an textarea where scroll has been created
window.addEventListener('scroll', (event) => {
  //scrollY is a read-only Web API that returns the number of pixels
  //that the document has scrolled vertically. May not be a whole number.
  //scrollX is horizontal 
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable) {
    alert("You've reached the bottom!")
    
  }
})

//need to test
//wheel
const myImage = Array.prototype.slice.call(document.querySelectorAll('img'));
console.log(myImage)
myImage.forEach(function(e) {
  e.addEventListener('wheel', (event) => {
  alert('You moved the mousewheel on an image!')
  e.target.style.border = "2px dotted purple"
  })
})

// mouseover*
// keydown*
// wheel
// drag / drop
// load
// focus
// resize
// scroll*
// select
// dblclick*


