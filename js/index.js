// Your code goes here
const navTags = document.querySelectorAll('nav a');

navTags[0].addEventListener('mouseover', (event) => {
    navTags[0].classList.toggle("makeRed");
});

navTags[1].addEventListener('click', (event) => {
    navTags[1].classList.toggle("makeRed");
});

navTags[2].addEventListener('dblclick', (event) => {
    navTags[2].classList.toggle("makeRed");
});

const buttons = document.querySelectorAll('.btn');


buttons.forEach((element) => {
    element.addEventListener('click', (event) => {
        TweenMax.to(element, 2 {
            backgroundColor: 'red'
        });
    });
});