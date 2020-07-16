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

// 2.) lol Frustrating scrolling

const scrollBarShenanigans = document.querySelector('body');
scrollBarShenanigans.addEventListener('wheel', (event) => {
alert('STOP IT')
});

// 3.) Just gonna tap out and do easy ones

// 3


navStuff.addEventListener('click', (event) => {
alert('I AM NOT IN THE MOOD TO BE TOUCHED') 
});

// 4

window.addEventListener('resize', (event) => {
    alert('IF YOU CANNOT ACCEPT MY SIZE THEN MAYBE YOU SHOULD GO FIND A SLIM YOUNG SITE I ALWAYS SEE YOU DROOLING OVER');
});

// 5

window.addEventListener('load', () => alert('DO NOT RUSH ME HAROLD I AM DOING MY BEST'))

// 6

const gottaGetAway = document.querySelector('.destination');
gottaGetAway.addEventListener('mousedown', (event) => {

    gottaGetAway.style.transform = 'scale(1.3)';
    gottaGetAway.style.transition = 'transform 1s';
});

// 7

const GottaGetAway = document.querySelector('.destination');
gottaGetAway.addEventListener('mouseup', (event) => {

gottaGetAway.style.transform = 'scale(1)';
gottaGetAway.style.transition = 'transform 1s';
});

// 8 and 9

let image = document.querySelectorAll('img')

let page = document.querySelector('body')

image.forEach(pic => {
  pic.addEventListener('dblclick', (e) => {
    e.stopPropagation()
    pic.style.border = '3px solid brown'
  })
});

page.addEventListener('dblclick', () => page.style.backgroundColor = 'black');
page.addEventListener('dblclick', () => alert('You just HAD to push me didnt you harold'));

// 10

page.addEventListener('copy', () => alert('YOU WILL NEVER FIND A COPY OF ME HAROLD'))








