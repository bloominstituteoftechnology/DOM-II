// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const links = document.querySelectorAll('a');
const intro = document.querySelector('.intro');
const mainNav = document.querySelector(".main-navigation");

let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

//random color for Fun Bus
function changeFunBusColor(){
    randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

        logoHeading.style.color = randomColor;
            
}
logoHeading.addEventListener('mouseover', changeFunBusColor);

//random link color
Array.from(links).forEach(link => {
    
    function linkClick(){
     randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

        link.style.color = randomColor;
    }
    link.addEventListener('click', linkClick)        
    })

function changeIntro(){
    randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    intro.style.backgroundColor = randomColor;
}
intro.addEventListener('wheel', changeIntro);

