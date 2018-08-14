// Your code goes here
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [x] `scroll`
// * [ ] `select`
// * [ ] `dblclick`
// .stopPropagation();
let opacity = 1;
const mainNav = document.querySelector('.nav-container .nav');
const funBusImage = document.querySelector('.intro img');
funBusImage.style.display = 'auto';
// janky fade out effect on funBusImage scroll
window.addEventListener('scroll', (event) => {
    opacity = opacity - .3;    
    funBusImage.style.opacity = `${opacity}`;
    if (opacity <= 0) {funBusImage.style.display = 'none'}
})

window.addEventListener('resize', (event) => {
    funBusImage.style.opacity = 1;
})