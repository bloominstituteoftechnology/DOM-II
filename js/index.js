// Initialize the elements
const navBar = document.querySelector('.nav');
const navElements = navBar.querySelectorAll('.nav-link');
const headerElement = document.querySelector('.intro');
const busImg = headerElement.querySelector('img');
const welcome = headerElement.querySelector('h2');
const contentContainer = document.querySelector(".content-section");
const titles = contentContainer.querySelectorAll('h2');
const contentImg = contentContainer.querySelector('img');
const contentParagraphs = contentContainer.querySelectorAll('p');
const contentDestination = document.querySelector('.content-destination');
const destinationTitles = contentDestination.querySelector('h2');
const destinationParagraph = contentDestination.querySelector('p');
const finalDestinations = document.querySelector('.content-destination');
const finalDestinationTitles = finalDestinations.querySelectorAll('h4');
const finalDestinationPs = finalDestinations.querySelectorAll('p');



//pure functions to be used as callbacks
function colorChanger(element){
    element.preventDefault();
    const {target} = element;
    target.style.color = 'pink'
    target.style.transition = '.2s';
}
function roundCorners(element){
    const {target} = element;
    target.style.borderRadius = '25%'
}

//Invoke the event listeners
navElements.forEach(e =>{
    e.addEventListener('mouseover', colorChanger);
});
busImg.addEventListener('click', roundCorners);
welcome.addEventListener('keydown', colorChanger);
titles.forEach(e =>{
    e.addEventListener('wheel', colorChanger);
});
contentImg.addEventListener('load', roundCorners);
contentParagraphs.forEach(e =>{
    e.addEventListener('focus', colorChanger);
});
destinationTitles.addEventListener('resize', colorChanger);
destinationParagraph.addEventListener('scroll', colorChanger);
finalDestinationTitles.forEach(e =>{
    e.addEventListener('focus', colorChanger);
});
finalDestinationPs.forEach(e =>{
    e.addEventListener('focus', colorChanger);
});





