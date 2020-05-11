let links = document.querySelectorAll('.nav-link');
links.forEach(text => {
    text.addEventListener('mouseover', event => {
        event.target.style.textDecoration = 'underline'
    });
});
links.forEach(text => {
    text.addEventListener('mouseout', event => {
        event.target.style.textDecoration = 'none'
    });
});
links.forEach(refresh => {
    refresh.addEventListener('click', (event) => {
        event.preventDefault();
    });
});

let keyD = document.querySelector('body');
keyD.addEventListener('keydown', logKey);
function logKey(e) {
    keyD.textContent += ` ${e.code}`;
};
let navH1 = document.querySelector('h1');
navH1.addEventListener('mouseenter', (event) => {
    navH1.style.transform = "scale(1.2)"
    navH1.style.transition = "all 0.3s"
});
navH1.addEventListener('mouseleave', () => {
    navH1.style.transform = "scale(1)";
});
let introImg = document.querySelector('.intro img');
introImg.addEventListener('dblclick', (event) => {
    introImg.style.border = '3px dotted red';
});
window.addEventListener('resize', (event) => {
    introImg.style.border = '3px dashed black';
});
let bgColor = document.querySelector('body');
let scrolling;
window.addEventListener('scroll', () => {
    bgColor.style.backgroundColor = 'yellow';
    window.clearTimeout(scrolling);
    scrolling = setTimeout(() => {
        bgColor.style.backgroundColor = 'initial';
    }, 90);
});

let vacaBundle = document.querySelectorAll('.destination');
vacaBundle.forEach(menu => {
    menu.addEventListener('contextmenu', event => {
        event.preventDefault();
    });
});
vacaBundle.forEach(highlight => {
    highlight.addEventListener('click', event => {
        event.stopPropagation();
        event.target.style.backgroundColor = 'yellow';
    });
});
let vacaChoice = document.querySelectorAll('.btn');
vacaChoice.forEach(pick => {
    pick.addEventListener('click', (event) => {
        event.target.style.border = "2px solid black";
    });
});
