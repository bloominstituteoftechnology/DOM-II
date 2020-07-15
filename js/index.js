// [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`






// 1.) big and small transform


const navStuff = document.querySelector('.nav');
navStuff.addEventListener('mouseover', (event) => {

navStuff.style.transform = 'scale(1.3)';
navStuff.style.transition = 'transform 1s';


});

navStuff.addEventListener('mouseleave',(event) => {
    navStuff.style.transform = 'scale(1)';
    navStuff.style.transition = 'transform 1s';
});

// 2.) Easy peasie alert

const scrollBarShenanigans = document.querySelector('body');
scrollBarShenanigans.addEventListener('wheel', (event) => {
alert('STOP IT')
});


