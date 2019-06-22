// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function(){
    logoHeading.style.fontSize = '2rem'; 
});


const btn = document.querySelector('.btn');
btn.addEventListener('dblclick', function(){
    btn.style.backgroundColor = 'black'; 
});


const intro = document.querySelector('.intro');
intro.addEventListener('wheel', function(){
    window.scrollTo(0, 1200);
});


const footer = document.querySelector('.footer p');
footer.addEventListener('click', function(){
  footer.style.fontSize = '20rem';
});


const introImg = document.querySelector('.intro img');
introImg.addEventListener('contextmenu', function(){
    introImg.style.display = 'none';
});

const introImg = document.querySelector('.intro img');
introImg.addEventListener('contextmenu', function(){
    introImg.style.display = 'none';
});
