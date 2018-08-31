// Your code goes here

// Variables

const mainNav = document.querySelector('.main-navigation .nav-container');
const funBusMain = document.querySelector('.logo-heading');
const nav = document.querySelectorAll('.nav-link');
const footer = document.querySelector('.footer');
const imgs = document.querySelectorAll("img");
const body = document.querySelector("body");
const button = document.querySelectorAll('.btn');
const anchorText = document.querySelectorAll('a');
const paragraphText = document.querySelectorAll('p');
const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const h4 = document.querySelectorAll('h4');

// Event Listeners

for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('mouseover', () =>{  // 1
        nav[i].style.fontSize = '3rem';
        nav[i].style.color = 'dodgerblue';
    });
}

for (let i = 0; i < nav.length; i++){              // 2
    nav[i].addEventListener('mouseout', (event) =>{
        nav[i].style.fontSize = '1.5rem';
        nav[i].style.color = 'black';
    });
};

// Toggles Night mode when N key is pressed  3

document.addEventListener('keydown', (event) => {
    if (event.key === 'n') {
        body.style.backgroundColor = 'rgb(71, 71, 73';
        mainNav.style.background = 'rgb(50, 50, 52)';
        footer.style.background = 'rgb(50, 50, 52)';
        anchorText.forEach((element) => {element.style.color = 'white';});
        paragraphText.forEach((element) => {element.style.color = 'white';});
        h1.style.color = 'white';
        h2.forEach((element) => {element.style.color = 'white';});
        h4.forEach((element) => {element.style.color = 'white';});
    }
});


mainNav.addEventListener('mouseover', (event) => {  //4
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = '#ffff00';
 });

body.addEventListener('click',   function()  {   // 5
    this.style.background = 'white';
});

mainNav.addEventListener('click',   function()  {   // 6
    this.style.background = 'white';
});

footer.addEventListener('click', function(){ //7
    this.style.background = 'white';
});

body.addEventListener('dblclick', function(){ //8
    location.reload();
});

funBusMain.addEventListener('mouseover', (event) =>{ //9
    funBusMain.style.fontSize = '5rem';
});

button.forEach((element) => {  //10
    element.addEventListener('click', (event) => {
        if (event.target.style.backgroundColor != 'blue'){
        event.target.style.backgroundColor = 'blue';
        event.target.style.color = 'white';
        }
        else if (event.target.style.backgroundColor === 'blue'){
            event.target.style.backgroundColor = '#17A2B8';
        }
    });
});

