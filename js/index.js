// Your code goes here
const welcome = document.querySelector('.welcome');
    welcome.addEventListener('mouseover', () => {
        welcome.style.color = "red";
    });

const logo = document.querySelector('.logo-heading');
    logo.addEventListener('click', () => {
        logo.style.fontSize = '100%'
    });
        
const firstText = document.querySelector('.welcome-text');
    window.addEventListener('scroll', () => {
        firstText.style.color = "teal";
    });
s
const secondText = document.querySelector('.adventure-text');
    secondText.addEventListener('mouseup', () => {
        secondText.style.fontSize = 'xx-large';
    });

const letsGo = document.querySelector('.letsgo');
    letsGo.addEventListener('dblclick', () => {
        letsGo.style.fontSize = '100%';
    });    

const letsGoImg = document.querySelector('.img-content');
    letsGoImg.addEventListener('click', () => {
        letsGoImg.style.borderImage = 30;
    });

const imgFluid = document.querySelector('.img-fluid');
    imgFluid.addEventListener('mouseleave', () => {
        imgFluid.style.border = '4px solid Black';
    }); 

const adventure = document.querySelector('.adventure');
    adventure.addEventListener('contextmenu', () => {
        adventure.style.color = "white";
    });
    
const destinationH2 = document.querySelector('.destinationH2');
    destinationH2.addEventListener('mousemove', () => {
        destinationH2.style.textAlign = "left";
    });
    
const destinationText = document.querySelector('.destinationText');
    destinationText.addEventListener('keydown', () => {
        destinationText.style.border = '2px dashed Blue';
    });
    destinationText.event.stopPropagation();   

const navLink = document.querySelectorAll('nav-link');
    navLink.event.preventDefault();
    
    