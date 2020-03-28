// Your code goes here
const getHeaderImg = document.querySelector('.intro img');
const getHeadingTitle = document.querySelector('h1');
const getTopHeading = document.querySelector('.intro h2');
const getMiddleRightImg = document.querySelector('.img-content img');
const getMiddleTopHeading = document.querySelector('.text-content h2');
const getMiddleTopParagraph1 = document.querySelector('.text-content p');
const getMiddleLeftImg = document.querySelector('.img-fluid, .rounded');
const getMiddleBottomRightParagraph1 = document.querySelector('.inverse-content .text-content p');
const getBottomHeading = document.querySelector('.content-destination h2');
const getBottomImg = document.querySelector('.content-destination img');
const getBottomSection = document.querySelector('.destination p');


const setHeadingTitle = getHeadingTitle.addEventListener('click', (event) =>{
   event.target.textContent = 'Adventure Land';
});

const setHeaderImg = getHeaderImg.addEventListener('dblclick', (event) => {
   event.target.src = './img/naturePhoto.jpg';
   event.target.style.width = '100%';h
   event.target.style.maxHeight = '60vh';
});

const setTopHeading = getTopHeading.addEventListener('mouseenter', (event) => {
   event.target.textContent = 'Welcome to Adventure Land!';
});

const setMiddleRightImage = getMiddleRightImg.addEventListener('auxclick', (event) => {
   event.target.src = './img/middle-right-image.jpg';
});

const setMiddleTopTextContent = getMiddleTopHeading.addEventListener('mouseleave', (event) => {
   event.target.textContent = 'Lets See The Stars!';
});

const setMiddleContentTopParagraph1 = getMiddleTopParagraph1.addEventListener('contextmenu', (event) => {
   event.preventDefault();
   event.target.textContent = `Well this content isn't relevant to the page content but it shows that the event listener was triggered`
});

const setMiddleLeftImg = getMiddleLeftImg.addEventListener('mouseover', (event) => {
   event.target.src = './img/adventure.jpg';
});

const setMiddleBottomRightParagraph1 = getMiddleBottomRightParagraph1.addEventListener('mouseout', (event) => {
   event.target.textContent = 'A pointing device was released over this element';
});

const setBottomHeading = getBottomHeading.addEventListener('mousedown', (event) => {
   event.target.textContent = 'Choose Your Adventure!';
});

const setBottomImg = getBottomImg.addEventListener('mouseleave', (event) => {
   event.target.src = './img/fun-bus.jpg'
});

function stopEventPropogation() {
   const setBottomSection = getBottomSection.addEventListener('click', (event) => {
      event.stopPropagation();
      event.target.textContent = "this works";
   });
};

stopEventPropogation();