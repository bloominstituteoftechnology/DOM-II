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

for (let i = 0; i < nav.length; i++){   // changes nav text to dodger blue
    nav[i].addEventListener('mouseover', () =>{  // 1
        nav[i].style.fontSize = '3rem';
        nav[i].style.color = 'dodgerblue';
    });
};


document.addEventListener('keydown', (event) => {  // Toggles Night mode when N key is pressed  2
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


mainNav.addEventListener('mouseover', (event) => {  //3  changes nav background to yellow on mouse entering it
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = '#ffff00';
 });

body.addEventListener('click',   function()  {   // 4  change background color of body to white when you click it
    this.style.background = 'white';
});

mainNav.addEventListener('click',   function()  {   // 5 change nav color to white when you click it
    this.style.background = 'white';
});

footer.addEventListener('click', function(){ //6 change footer color to white when clicking it
    this.style.background = 'white';
});

body.addEventListener('dblclick', function(){ //7 double click to reload page
    location.reload();
});

funBusMain.addEventListener('mouseover', (event) =>{ //8  increase font size of logo while hovering over it
    funBusMain.style.fontSize = '5rem';
});

button.forEach((element) => {  // 9 change buttons to dark blue when clicking, then click again the reset to normal color
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

