// Your code goes here
// * [x] `mouseover`
// * [x] `keydown`
// * [x] `wheel`
// * [ ] `drag / drop`
// * [x] `load`
// * [x] `focus`
// * [x] `resize`
// * [x] `scroll`
// * [x] `select`
// * [x] `dblclick`
// .stopPropagation();
let firstPageLoad = true;
let opacity = 1;
let width = 0;
let pSize = 16;
const mainNav = document.querySelector('.nav-container .nav');
const funBusImage = document.querySelector('.intro img');
const universalImgSelect = document.querySelectorAll('img');
const body = document.querySelector('body');
const p = document.querySelectorAll('p');
funBusImage.style.display = 'auto';
// janky fade out effect on funBusImage scroll
// window.addEventListener('scroll', (event) => {
//     opacity = opacity - .3;    
//     funBusImage.style.opacity = `${opacity}`;
//     if (opacity <= 0) {funBusImage.style.display = 'none'}
// })

// window.addEventListener('resize', (event) => {
//     funBusImage.style.opacity = 1;
// })

// universalImgSelect[1].addEventListener('mouseover', (event) => {
//     width === 50 ? alert(`That's too far!`) : width += 5;
//     universalImgSelect[1].style.borderRadius = `${width}%`;
// })

// window.addEventListener('load', (event) => {
//     // window.alert('Welcome to my Fun Bus Page!');
//     // alert('I hope you enjoy your stay here on the Fun Bus!')
//     // alert('The Fun Bus strives to be a wild ride!')
//     // alert('I wish all my content was delivered to me through alert messages in my browser.')
//     // alert('Content control would be a thing of the past!')
//     // alert('Just think about it, you could just click a simple button to get more information to consume.')
//     // alert(`Honestly, you wouldn't need to think about much else.`)
//     // alert('Just mindlessly clicking... clicking... clicking...')
//     // alert('How about we change up the boxes a little bit. You know what to do.')
//     // confirm(`Sometimes options can be fun! Who knew "cancel" could be so enticing! Go ahead and click whatever you'd like. You've earned it.`);
//     // alert(`Not that it makes much of a choice. It's all about the illusion of choice, am I right? The idea of power is intoxicating.`)
//     // alert(`I want to get off Fun Bus's wild ride`);
//     body.classList.add('blur');
// })

window.addEventListener('focus', (event) => {
    body.style.color = 'darkgreen';
    body.classList.remove('blur');
})

// window.addEventListener('dblclick', (event) => {
//     body.classList.remove('blur');
// })

// window.addEventListener('wheel', (event) => {
// p.forEach(param => param.style.fontSize = `${pSize}px`);
// if (pSize <= 1) {
//     pSize = 1;
// } else {
//     pSize -= 1;
//     p.forEach(param => param.style.fontSize = `${pSize}px`);
// }
// })

window.addEventListener('select', (event) => {
    alert(`You've selected that text! Great job!`);
})
'use strict';
window.onkeydown = function(event) {
    if (event.keyCode === 66) {
        body.classList.toggle('blur');
    }
 };

 window.addEventListener('blur', (event) => {
    body.classList.add('blur');
})