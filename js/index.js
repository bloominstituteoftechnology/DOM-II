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

// 6 ///////////////////////////// 'select'

window.addEventListener('select', (event => {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    selection.style.color = getRandomColor();
}))

// 7 ///////////////////////////// 'scroll'

window.addEventListener('scroll', (event =>
    nav.style.backgroundColor = getRandomColor()));

// 8 /////////////////////////////

