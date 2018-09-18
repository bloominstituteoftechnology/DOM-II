

const navItemOne = document.querySelector('.nav-link1');
const navItemTwo = document.querySelector('.nav-link2');
const navItemThree = document.querySelector('.nav-link3');
const navItemFour = document.querySelector('.nav-link4');
navItemOne.addEventListener('click', (event)=>{
    event.preventDefault();
});
navItemTwo.addEventListener('click', (event)=>{
    event.preventDefault();
});
navItemThree.addEventListener('click', (event)=>{
    event.preventDefault();
});
navItemFour.addEventListener('click', (event)=>{
    event.preventDefault();
});



const bottomButtons = document.querySelector('.btn');

bottomButtons.addEventListener('mouseenter', () => {
    bottomButtons.classList.toggle('display');
});
bottomButtons.addEventListener('mouseleave', () =>{
    bottomButtons.classList.toggle('display');
});

const backgroundAdjust = document.querySelector('html');

backgroundAdjust.addEventListener('wheel', ()=>{
    backgroundAdjust.style.backgroundColor = 'lightpink';
});

const foots = document.querySelector('.footer');

foots.addEventListener('dblclick', () => {
    foots.style.backgroundColor = 'yellow';
});

const mainHeader = document.querySelector('.main-navigation');

mainHeader.addEventListener('dblclick', ()=>{
    mainHeader.style.backgroundColor = 'cornflowerblue';
    mainHeader.stopPropagation();
});

backgroundAdjust.addEventListener('keydown', ()=>{
    backgroundAdjust.style.backgroundColor = 'mediumslateblue';
}); 

window.addEventListener('resize', ()=>{
    backgroundAdjust.style.backgroundColor = 'orange'
});

const busImg = document.querySelector('.intro img');

busImg.addEventListener('click', ()=>{
    busImg.classList.toggle('border-radius');
});
