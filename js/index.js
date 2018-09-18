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


/*===================Event listeners===================*/

//click on fun bus logo, changes color
funBusMain.addEventListener('click', () =>{
    funBusMain.style.color = 'darkkhaki';
});

//Nav elements mouseover Grow and Color Change
for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('mouseover', () =>{
        nav[i].style.fontSize = '1.65rem';
        nav[i].style.color = 'lightseagreen';
    });
}
//Nav elements shrink back and color change
for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('mouseout', (event) =>{
        nav[i].style.fontSize = '1.6rem';
        nav[i].style.color = 'black';
    });
}

//mouse over nav makes it blue
mainNav.addEventListener('mouseover', (event) => {  
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = 'aliceblue';
 });

 //Night mode
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

//scrolling changes background
window.addEventListener('scroll', function() {
    event.stopPropagation();
    document.body.style.backgroundColor = "aliceblue";
});

//clicking the body makes it white
body.addEventListener('click',   function()  {   
    this.style.background = 'white';
});

//clicking nav turns it back to white
mainNav.addEventListener('click',   function()  {   
    this.style.background = 'white';
});

//clicking footer makes it white.
footer.addEventListener('click', function(){ 
    this.style.background = 'white';
});

//double clicking body reloads the document
body.addEventListener('dblclick', function(){ 
    location.reload();
});

//mouse over logo makes it big, mouse out shrinks it again
funBusMain.addEventListener('mouseover', (event) =>{ 
    funBusMain.style.fontSize = '5rem';
});
funBusMain.addEventListener('mouseout', (event) =>{ 
    funBusMain.style.fontSize = '3rem';
});

// button.addEventListener('blur', e => {
//     e.target.style.background = '';
    // e.preventDefault();
    // e.stopPropagation();
    // body.style.backgroundImage = "url(img/fun-bus.jpg)";
// })

//button color change animation
button.forEach((element) => {  
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
