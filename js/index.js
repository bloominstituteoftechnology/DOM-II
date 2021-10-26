// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const links = document.querySelectorAll('a');
const div = document.querySelectorAll('div');
const h2 = document.querySelectorAll('h2');
const header = document.querySelector('.main-navigation');
const button = document.querySelectorAll('.btn');

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

    Array.from(div).forEach(d => {
        function changeDiv(){
            randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            d.style.backgroundColor = randomColor;
        }
        d.addEventListener('wheel', changeDiv);
    })


Array.from(h2).forEach(h2Txt => {
function h2DblClick(){
    randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    h2Txt.style.color = randomColor;
}
h2Txt.addEventListener('dblclick',h2DblClick)
})

function removeHeader(event){
    if(event.key === "Escape"){
        header.style.visibility = 'hidden';
    }
}
document.addEventListener('keydown', removeHeader)

function getHeader(event){
    if(event.key !== "Escape"){
        header.style.visibility = 'visible';
    }
}
document.addEventListener('keyup', getHeader)

Array.from(button).forEach(btn => {
    function loaded(){
        randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        btn.style.backgroundColor = randomColor;
    }
     btn.onload=loaded();
    })  

