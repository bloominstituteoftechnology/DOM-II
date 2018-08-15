/*[ Element selectors ]*/
const tracker = document.querySelectorAll('.tracker p');
const busImg = document.querySelector('.intro img');
const footer = document.querySelector('footer');
const destinationP = document.querySelectorAll('.destination p');
const boatImg = document.querySelector('.content-destination img');
const signMeUp = document.querySelectorAll('.destination .btn');
const firstP = document.querySelector('p');
const navItems = document.querySelectorAll('.nav a');
const intro = document.querySelector('.intro');

/*[ Congrats, you win the prize! ]*/
const iframe = document.querySelector('iframe');
let tr = [];
const trackerCheck = function(){
  if (!iframe.src.includes('&autoplay=1') && tr[0] && tr[1] && tr[2] && tr[3] && tr[4] && tr[5] && tr[6] && tr[7] && tr[8] && tr[9]) {
    iframe.src += '&autoplay=1';
    iframe.style.display = 'block';
  }
}

/*[ Event listeners ]*/
//Load page
window.addEventListener('load', () => {
  tracker[0].style.color = 'lime';
  tr[0] = 1;
  trackerCheck()
});

//Click the bus
busImg.addEventListener('click', (event) => {
  tracker[2].style.color = 'lime';
  event.stopPropagation();
  tr[2] = 1;
  trackerCheck()
});

//Resize the window
window.addEventListener('resize', () => {
  tracker[4].style.color = 'lime';
  tr[4] = 1;
  trackerCheck()
});

//Scroll the page
window.addEventListener('scroll', () => {
  tracker[6].style.color = 'lime';
  tr[6] = 1;
  trackerCheck()
});

//Press any key
window.addEventListener('keydown', () => {
  tracker[8].style.color = 'lime';
  tr[8] = 1;
  trackerCheck()
});

//Double-click the copyright footer
footer.addEventListener('dblclick', () => {
  tracker[1].style.color = 'lime';
  tr[1] = 1;
  trackerCheck()
});

//Mouseover each 'Sign Me Up!' button ~(turn each green)
let signUpCheck = [];
signMeUp[0].addEventListener('mouseover', () => {
  signMeUp[0].style.background = 'lime';
  signUpCheck[0] = 1;
  if (signUpCheck[0] && signUpCheck[1] && signUpCheck[2]) {
    tracker[3].style.color = 'lime';
    tr[3] = 1;
    trackerCheck()
  };
});
signMeUp[1].addEventListener('mouseover', () => {
  signMeUp[1].style.background = 'lime';
  signUpCheck[1] = 1;
  if (signUpCheck[0] && signUpCheck[1] && signUpCheck[2]) {
    tracker[3].style.color = 'lime';
    tr[3] = 1;
    trackerCheck()
  };
});
signMeUp[2].addEventListener('mouseover', () => {
  signMeUp[2].style.background = 'lime';
  signUpCheck[2] = 1;
  if (signUpCheck[0] && signUpCheck[1] && signUpCheck[2]) {
    tracker[3].style.color = 'lime';
    tr[3] = 1;
    trackerCheck()
  };
});

//Right click the last paragraph
destinationP[2].addEventListener('contextmenu', () => {
  tracker[5].style.color = 'lime';
  tr[5] = 1;
  trackerCheck()
});

//Drag the second photo of a boat
boatImg.addEventListener('drag', () => {
  tracker[7].style.color = 'lime';
  tr[7] = 1;
  trackerCheck()
});

//Copy text from first paragraph
firstP.addEventListener('copy', () => {
  tracker[9].style.color = 'lime';
  tr[9] = 1;
  trackerCheck()
});


//Prevent propagation (see 'Click the Bus' above)
intro.addEventListener('click', () => {
  tracker[2].style.color = 'red';
  tr[2] = 0;
});


//Stop nav refresh
navItems.forEach(item => item.addEventListener('click', (event) => {
  event.preventDefault();
}));


//GSAP animation
//--------------


//Congratulations, you did it!