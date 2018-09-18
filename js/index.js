

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
})