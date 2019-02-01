// Your code goes here

let h2 = document.querySelectorAll('h2'); 
h2.forEach((index, i) => h2[i].addEventListener('click', (event =>
    alert (`You clicked an h2`)))
)

let p = document.querySelectorAll('p');
p.forEach((index, i) => {
   p[i].addEventListener('mouseover', (event => p[i].style.backgroundColor = 'yellow'))
   p[i].addEventListener('mouseleave', (event => p[i].style.backgroundColor = 'white'))
})

const body = document.querySelector('body');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

document.addEventListener('keydown', (event =>  body.style.backgroundColor = getRandomColor() ));



