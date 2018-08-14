/*[ Element selectors ]*/

const tracker = document.querySelectorAll('.tracker p')
const busImg = document.querySelector('.intro img');
const footer = document.querySelector('footer');
const destinationP = document.querySelectorAll('.destination p')
const boatImg = document.querySelector('.content-destination img');
const signMeUp = document.querySelectorAll('.destination .btn')
const navItems = document.querySelectorAll('.nav a');
const 

/*[ Element selectors ]*/




/*[ Event listeners ]*/

//Load page
window.addEventListener('load', () => {
  tracker[0].style.color = 'lime';
});

//Click the bus
busImg.addEventListener('click', () => {
  tracker[2].style.color = 'lime';
});

//Resize the window
window.addEventListener('resize', () => {
  tracker[4].style.color = 'lime';
});

//Scroll the page
window.addEventListener('scroll', () => {
  tracker[6].style.color = 'lime';
});

//Press any key
window.addEventListener('keydown', () => {
  tracker[8].style.color = 'lime';
});

//Double-click the copyright footer
footer.addEventListener('dblclick', () => {
  tracker[1].style.color = 'lime';
});

//Mouseover each 'Sign Me Up!' button ~(turn each green)
let signUpCheck = [];
signMeUp[0].addEventListener('mouseover', () => {
  signMeUp[0].style.background = 'lime';
  signUpCheck[0] = 1;
  if (signUpCheck[0] && signUpCheck[1] && signUpCheck[2]) tracker[3].style.color = 'lime';
});
signMeUp[1].addEventListener('mouseover', () => {
  signMeUp[1].style.background = 'lime';
  signUpCheck[1] = 1;
  if (signUpCheck[0] && signUpCheck[1] && signUpCheck[2]) tracker[3].style.color = 'lime';
});
signMeUp[2].addEventListener('mouseover', () => {
  signMeUp[2].style.background = 'lime';
  signUpCheck[2] = 1;
  if (signUpCheck[0] && signUpCheck[1] && signUpCheck[2]) tracker[3].style.color = 'lime';
});

//Right click the last paragraph
destinationP[2].addEventListener('contextmenu', () => {
  tracker[5].style.color = 'lime';
});

//Drag the second photo of a boat
boatImg.addEventListener('drag', () => {
  tracker[7].style.color = 'lime';
});

//Drop it here
boatImg.addEventListener('drop', () => {
  tracker[9].style.color = 'lime';
});


//Prevent propagation



//Stop nav refresh
navItems.forEach(item => item.addEventListener('click', (event) => {
  event.preventDefault();
}));