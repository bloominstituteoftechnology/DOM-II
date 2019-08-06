// Your code goes here
const footer = document.querySelector('.footer');
const home = document.querySelector('.home');
footer.addEventListener('mouseenter', (e) => {
    home.style.transform = "rotate(120deg)";
})

footer.addEventListener('mouseleave', (e) => {
    home.style.transform = "rotate(0)";
})




 
let mainNav = document.querySelector('.main-navigation'); 
mainNav.addEventListener('click', (e) => { 
alert('You clicked the main-navigation') 
}) 

// Only works when you inspect?
let body = document.querySelector('body');

document.addEventListener('mouseover', (e) => {
    body.style.backgroundColor = getRandomColor();
    header.style.backgroundColor = body.style.background;
    footer.style.backgroundColor = body.style.background;

})

function getRandomColor() {
    var letters = "01234ABCD"
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }




const nav = document.querySelector('.nav');
nav.addEventListener('click', (e) => {
    alert('To Where');
    e.stopPropagation();
} )


const nav2 = document.querySelector('.btn');



nav2.addEventListener('click', (e) => {
    e.target.style.background = 'blue';
});





let footer2 = document.querySelector('body');
document.addEventListener('keydown', (e) => {
    footer2.style.visibility = "hidden";
})



const intro = document.querySelector('img');

intro.addEventListener('dblclick', function (e) {
    intro.classList.toggle('large');
});

const img = document.querySelector('body');
img.addEventListener('keydow', (e) =>  {
 img.style.visibility = 'visible';
});

const fun = document.querySelector('.intro');
fun.addEventListener('mouseover', (e) => {
    document.body.style.background = 'black';
    header.style.backgroundColor = boby.style.backgroundColor;
    footer.style.backgroundColor = body.style.backgroundColor;

});

