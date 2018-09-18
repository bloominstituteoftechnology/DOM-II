// Your code goes here


window.addEventListener("load", (event) => {
    TweenMax.from('.nav', 2, {
        opacity: 0
      });
    event.preventDefault();
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

