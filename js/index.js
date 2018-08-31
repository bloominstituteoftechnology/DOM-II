// Your code goes here

// Variables

const mainNav = document.querySelector('.main-navigation .nav-container');
const funBusMain = document.querySelector('.logo-heading');
const nav = document.querySelectorAll('.nav-link');
const footer = document.querySelector('.footer');
const imgs = document.querySelectorAll("img");
const body = document.querySelector("body");
const button = document.querySelectorAll('.btn');

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
}

window.addEventListener('scroll', function() {      //3
    document.body.style.backgroundColor = "dodgerblue";
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