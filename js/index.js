// Your code goes here


window.addEventListener("load", (event) => {
    TweenMax.from('.nav', 2, {
        opacity: 0
      });
});

//let mainNavItem = document.querySelectorAll('.nav a');

let images = document.querySelectorAll('img');


for (let i = 0; i < images.length; i++){
    images[i].addEventListener('mouseover', (event) => {
    images[i].classList.toggle('grayscale');
    });
}

for (let i = 0; i < images.length; i++){
    images[i].addEventListener('mouseleave', (event) => {
    images[i].classList.toggle('grayscale');
    });
}


let h2 = document.querySelectorAll('h2');

for (let i = 0; i < images.length; i++) {
    h2[i].addEventListener('mouseenter', (event) => {
        TweenMax.to(h2[i], 3, {x:100})
    });
}


let p = document.querySelectorAll('p'); 

for (let i = 0; i < p.length; i++) {
    p[i].addEventListener('dblclick', (event) => {
    p[i].style.fontWeight = 'bold';
    });       
}