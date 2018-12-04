// Your code goes here

const navTags = document.querySelectorAll('nav a');

navTags[0].addEventListener('mouseover', (event) => {
    navTags[0].classList.toggle("makeRed");
});

navTags[1].addEventListener('click', (event) => {
    navTags[1].classList.toggle("makeRed");
    event.preventDefault();
});

navTags[2].addEventListener('dblclick', (event) => {
    navTags[2].classList.toggle("makeRed");
});





//Greensock
const buttons = document.querySelectorAll('.btn');

TweenMax.staggerFrom(".btn", 1, {
    x: -300,
    opacity: 0
}, -0.2);

buttons.forEach((element) => {
    element.addEventListener('mouseenter',(event) => {
        TweenMax.to(element, 1, {
            scale: 1.1,
            backgroundColor: 'rgb(45, 97, 105)',
            color: 'white'
            
        });
    });
    element.addEventListener('mouseout',(event) => {
        console.log('mouse exited!');
        TweenMax.to(element, 1, {
            scale:1,
            backgroundColor: '#17A2B8'
        });
    });
});



