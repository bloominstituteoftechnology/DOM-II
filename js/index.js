// Your code goes here
// Selectors //////////////////////
let h2 = document.querySelectorAll('h2'); 
const body = document.querySelector('body');
let p = document.querySelectorAll('p');
const img = document.querySelectorAll('img');
const nav = document.querySelector('.main-navigation');



// 1 ///////////////////////////// 'click'

h2.forEach((index, i) => h2[i].addEventListener('click', (event =>
    alert (`You clicked an h2`)))
)

// 2 & 3 ///////////////////////////// 'mouseover' & 'mouseleave'

p.forEach((index, i) => {
   p[i].addEventListener('mouseover', (event => p[i].style.backgroundColor = 'yellow'))
   p[i].addEventListener('mouseleave', (event => p[i].style.backgroundColor = 'white'))
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// 4 ///////////////////////////// 'keydown'

document.addEventListener('keydown', (event =>  body.style.backgroundColor = getRandomColor() ));

// 5 ///////////////////////////// 'dblclick'

document.addEventListener('dblclick', (event => body.style.backgroundColor = 'white')); 
document.addEventListener('dblclick', (event => nav.style.backgroundColor = 'white'));
p.forEach((index, i) => 
document.addEventListener('dblclick', (event => p[i].style.backgroundColor = 'white')));
// 6 ///////////////////////////// 'drag'

document.addEventListener('dragstart',(event => {
    alert ('Put that back!')
    event.stopImmediatePropagation();
}))

// 7 ///////////////////////////// 'scroll'

window.addEventListener('scroll', (event => {
    nav.style.backgroundColor = getRandomColor()}));

p.forEach((index, i) => 
    window.addEventListener('scroll', (event => {
    p[i].style.backgroundColor = getRandomColor()})))

// 8 /////////////////////////////

// window.addEventListener('resize', (event =>
//     ))