// Your code goes here
const title = document.querySelector('.logo-heading');
const navHover = document.querySelector('a');
const introP = document.querySelector('.intro p');
const sunButton = document.querySelector('.btn');
const busImg = document.querySelector('.intro img');


function titleHover(event){
    title.style.color = 'pink';
}

title.addEventListener('mouseover', titleHover);
title.addEventListener('mouseleave', colorOut);


navHover.addEventListener('mouseover', (event) => {
    navHover.style.backgroundColor = 'pink';
})



function colorOn(event){
    introP.style.color = 'pink';
}

function colorOut(event){
    introP.style.color = 'black';
    title.style.color = 'black';
}

introP.addEventListener('mouseenter', colorOn);
introP.addEventListener('mouseleave', colorOut)


function esc(event){
    if(event.key === 'Escape'){

    }
}



function buttonClick(event){
    console.log('The button was clicked!');
    sunButton.style.fontSize = '3rem';
}

sunButton.addEventListener('click', buttonClick);



function busFade(event){
    busImg.style.opacity = '50%';
}

busImg.addEventListener('mouseover', busFade);

function noFade(event){
    busImg.style.opacity = '100%';
}

busImg.addEventListener('mouseleave', noFade);