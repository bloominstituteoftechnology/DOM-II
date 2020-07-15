// 1.) Mouse events


const navStuff = document.querySelector('.nav');
navStuff.addEventListener('mouseover', (event) => {

navStuff.style.transform = 'scale(1.3)';
navStuff.style.transition = 'transform 1s';


});

navStuff.addEventListener('mouseleave',(event) => {
    navStuff.style.transform = 'scale(1)';
    navStuff.style.transition = 'transform 1s';
});

// 2.) 


