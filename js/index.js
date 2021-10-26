// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const links = document.querySelectorAll('a');
const intro = document.querySelector('.intro');
const h2 = document.querySelectorAll('h2');


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

Array.from(h2).forEach(h2Txt => {
function h2DblClick(){
    randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    h2Txt.style.color = randomColor;
}
h2Txt.addEventListener('dblclick',h2DblClick)
})