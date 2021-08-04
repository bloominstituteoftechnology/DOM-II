// Your code goes here
// I believe that in order to change something I need to select it first so I will start by selecting 10 items which may or may not be the ones I end up creating listeners for
const mainNav = document.querySelector('.main-navigation')
const genNav = document.querySelector('nav')
const firstSignMeUpButton = document.querySelector('.btn')//used
const pickYour = document.querySelector('.content-destination')
const destination = document.querySelector('.destination')
const intro = document.querySelector('.intro')//used
const funBus = document.querySelector('.logo-heading')//used
const mapImg = document.querySelector('.intro img')
//console.log(mapImg)


function changeTitle (){
    console.log('mouse over Fun Bus');
    funBus.textContent = 'The Funnest';
};

funBus.addEventListener('mouseover', changeTitle)

window.addEventListener('load',  event => {
    console.log('The page loaded and your listener is working')
    intro.style.backgroundColor = 'beige'
});

function getExcited (){
    console.log('first of the buttons has been clicked')
    firstSignMeUpButton.textContent = 'GET EXCITED!'
    firstSignMeUpButton.style.backgroundColor = 'beige'
}

firstSignMeUpButton.addEventListener('dblclick', getExcited)

function changeImg(){
    console.log('testing image capture')
    mapImg.setAttribute(src,"img/destination.jpg") 
}

mapImg.addEventListener('mouseover', changeImg);

