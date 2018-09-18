// Your code goes here


// mouseover

const mainImage = document.querySelector('.container .intro img');

mainImage.addEventListener('mouseover', (event) => {
    event.target.style.filter = 'grayscale(100%)'
});


// keydown

const backgroundColorChange = document.querySelector('html')

backgroundColorChange.addEventListener('keydown', (event) =>{
    event.target.style.backgroundImage = 'linear-gradient(#FF5F6D, #FFC371)';
});

// wheel

backgroundColorChange.addEventListener('wheel', (event) =>{
    event.target.style.backgroundImage = 'linear-gradient(#EECDA3, #EF629F)';
});

// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick



