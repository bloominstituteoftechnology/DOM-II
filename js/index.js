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
  const text = document.querySelector('.intro p')
  text.innerHTML = "You did it!"
  text.style.fontSize = "30px"
})