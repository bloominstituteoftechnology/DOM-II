/// Your code goes here
const navbar = document.querySelector('.nav');
navbar.addEventListener('mouseover', () => {
    console.log('sup!'); 
navbar.style.boxShadow = "0px 0px 50px blue";
});

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', () => {
    logoHeading.style.fontSize = "10rem";
    console.log('sup!'); 
});

const funBusImage = document.querySelector('.intro img');
funBusImage.addEventListener('mouseleave', () => {
    funBusImage.style.transform = "rotate(7deg)";
    console.log('sup!'); 
});

const intro = document.querySelector('.intro');
intro.addEventListener('click', () => {
    intro.style.border = "thick solid #0000FF";
    console.log('sup!'); 
});

const letsGo = document.querySelector('.letsGo');
window.addEventListener('resize', () => {
    console.log('sup!'); 
    letsGo.style.display = 'none';
});

const adventureImage = document.querySelector('#adventure');
window.addEventListener('load', () => {
    adventureImage.style.border = "thick solid gray";
    console.log('adventure img!'); 
});
//////////////////////////////
const funImage = document.querySelector('#fun');
funImage.addEventListener('contextmenu', () => {
    funImage.style.width = "10rem";
    console.log('adventure img!'); 
});

const destinationImage = document.querySelector('#destination');
window.addEventListener('focus', () => {
    destinationImage.style.boxShadow = "0px 0px 50px blue";
    console.log('adventure img!'); 
});

const destinationText = document.querySelector('.destination');
window.addEventListener('keydown', () => {
    destinationText.style.width = "50rem";
    console.log('adventure img!'); 
});

const footer = document.querySelector('.footer');
window.addEventListener('drag', () => {
    footer.style.margin = "20rem";
    console.log('adventure img!'); 
});