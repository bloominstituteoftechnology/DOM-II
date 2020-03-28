// Your code goes here
const getHeaderImg = document.querySelector('.intro img');
const getHeadingTitle = document.querySelector('h1');
const getTopHeading = document.querySelector('.intro h2');
const getMiddleRightImg = document.querySelector('.img-content img');
const getMiddleTopHeading = document.querySelector('.text-content h2');

const setHeadingTitle = getHeadingTitle.addEventListener('click', (event) =>{
   event.target.textContent = 'Adventure Land';
});

const setHeaderImg = getHeaderImg.addEventListener('dblclick', (event) => {
   event.target.src = './img/naturePhoto.jpg';
   event.target.style.width = '100%';
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