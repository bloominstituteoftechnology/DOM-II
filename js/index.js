// Your code goes here

const container = document.querySelector('.home');
console.log(container);

const button = document.querySelector('section.content-pick .destination .btn')


function alert (){
    alert ('Signing Up!');
}

function buttonColor (){
        button.style.backgroundColor='red';
}

button.addEventListener('click', alert);
button.addEventListener('click', buttonColor);

const text = document.querySelector('.intro h2');

text.addEventListener('click', (e) => {
    text.textContent = 'Lets Have Fun!'
});

const images = document.querySelector('.img-content')
images.addEventListener('mouseenter', function(){
    images.style.transform = 'scale(1.6)';
    images.style.transition = 'transform 1s'
})

images.addEventListener('mouseleave', function(){
    images.style.transform = 'scale (1)';
})

const body = document.querySelector('body');

body.addEventListener('click', (e) =>{
    body.style.backgroundColor = 'black';
})

const texts = document.querySelectorAll('p')


const nav = document.querySelector('.nav');
nav.addEventListener('click', (e) => {
    e.preventDefault();
})