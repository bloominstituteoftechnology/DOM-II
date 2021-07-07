// Your code goes here

const container = document.querySelector('.home');
console.log(container);

const button = document.querySelectorAll('section.content-pick .destination .btn')


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

const images = document.querySelectorAll('.img-content')
images.addEventListener('mouseenter', function(){
    images.style.transform = 'scale(1.6)';
    images.style.transition = 'transform 1s'
})


const nav = document.querySelector('.nav');
nav.addEventListener('click', (e) => {
    e.preventDefault();
})