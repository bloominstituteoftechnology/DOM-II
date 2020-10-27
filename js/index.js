// Your code goes here
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', (event) => {
    event.target.style.fontSize= 'x-large';
    event.target.style.color= '#17A2B8';
}); 
nav.addEventListener('mouseout',(event) => {
    event.target.style = 'initial';
}); 

// const header = document.querySelector('.main-navigation');
// header.addEventListener

// const destination = document.querySelector('.container nav-container');

document.addEventListener("keydown", function(event) {
    if(event.keyCode == '40') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    };
});