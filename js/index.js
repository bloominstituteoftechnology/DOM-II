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