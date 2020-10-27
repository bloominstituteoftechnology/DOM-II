// Your code goes here
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', (event) => {
    event.target.style.fontSize= 'x-large';
    event.target.style.color= '#17A2B8';
}); 
nav.addEventListener('mouseout',(event) => {
    event.target.style = 'initial';

}); 