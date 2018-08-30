// Your code goes here

//MOUSEOVER NAV TEXT CHANGES COLOR AND BACK TO BLACK WHEN MOUSE LEAVES
let navText = document.querySelectorAll('.nav-link');
navText.forEach(function(element) {
    element.addEventListener('mouseover', (event) => {
        event.target.style.color = 'yellow';
    });
});
navText.forEach(function(element) {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.color = 'black';
    });
});

//KEYDOWN CHANGES UI COLORS TO NIGHT-TIME MODE WHEN KEY N IS PRESSED
let body = document.querySelector('body');
let header = document.querySelector('.main-navigation');
let footer = document.querySelector('.footer');
let anchorText = document.querySelectorAll('a');
let paragraphText = document.querySelectorAll('p');
let h1 = document.querySelector('h1');
let h2 = document.querySelectorAll('h2');
let h4 = document.querySelectorAll('h4');
document.addEventListener('keydown', (event) => {
    if (event.key === 'n') {
        body.style.backgroundColor = 'rgb(71, 71, 73';
        header.style.background = 'rgb(50, 50, 52)';
        footer.style.background = 'rgb(50, 50, 52)';
        anchorText.forEach(function(element) {element.style.color = 'white';});
        paragraphText.forEach(function(element) {element.style.color = 'white';});
        h1.style.color = 'white';
        h2.forEach(function(element) {element.style.color = 'white';});
        h4.forEach(function(element) {element.style.color = 'white';});
    }
});


//WHEN THE WHEEL IS SCROLLED IN NIGHTTIME UI THE LOGO FLASHES THROUGH THE COLORS OF THE RAINBOW
document.addEventListener("scroll", () => {
    if (h1.style.color === 'white') {h1.style.color = 'red';}
    else if (h1.style.color === 'red') {h1.style.color = 'orange';}
    else if (h1.style.color === 'orange') {h1.style.color = 'yellow';}
    else if (h1.style.color === 'yellow') {h1.style.color = 'green';}
    else if (h1.style.color === 'green') {h1.style.color = 'blue';}
    else if (h1.style.color === 'blue') {h1.style.color = 'purple';}
    else if (h1.style.color === 'purple') {h1.style.color = 'red';}
});

//WHEN SIGN ME UP BUTTONS ARE CLICKED THEY WILL BECOME DARKER BLUE, IF CLICKED AGAIN THEY WILL GO BACK TO ORIGINAL COLOR
let button = document.querySelectorAll('.btn');
button.forEach(function(element) {
    element.addEventListener('click', (event) => {
        if (event.target.style.backgroundColor != 'blue'){
        event.target.style.backgroundColor = 'blue';
        }
        else if (event.target.style.backgroundColor === 'blue'){
            event.target.style.backgroundColor = '#17A2B8';
        }
    });
});

///////NOT WORKING

//WHEN PARAGRAPH TEXT IS SELECTED IT WILL CHANGE THE COLOR OF THE FONT
document.addEventListener("select", () => {
    paragraphText.style.color = 'yellow'; 
});

//LOAD STARTS TIMER FOR POP UP TO APPEAR, DOUBLE CLICK TO REMOVE POP UP
document.addEventListener('load', (event) => { 
    let myVar = popUp(myTimer, 1000);
    let popUp = () => {
        window.confirm("sometext");
    };
});





