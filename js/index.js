// Your code goes here

//MOUSEOVER NAV TEXT CHANGES COLOR AND BACK TO BLACK WHEN MOUSE LEAVES
let navText = document.querySelectorAll('.nav-link');
navText.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.color = 'yellow';
    });
});
navText.forEach((element) => {
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
        anchorText.forEach((element) => {element.style.color = 'white';});
        paragraphText.forEach((element) => {element.style.color = 'white';});
        h1.style.color = 'white';
        h2.forEach((element) => {element.style.color = 'white';});
        h4.forEach((element) => {element.style.color = 'white';});
    }
});


//WHEN THE WHEEL IS SCROLLED IN NIGHTTIME UI THE LOGO FLASHES THROUGH THE COLORS OF THE RAINBOW
document.addEventListener('scroll', () => {
    if (h1.style.color === 'white') {h1.style.color = 'red';}
    else if (h1.style.color === 'red') {h1.style.color = 'orange';}
    else if (h1.style.color === 'orange') {h1.style.color = 'yellow';}
    else if (h1.style.color === 'yellow') {h1.style.color = 'green';}
    else if (h1.style.color === 'green') {h1.style.color = 'blue';}
    else if (h1.style.color === 'blue') {h1.style.color = 'purple';}
    else if (h1.style.color === 'purple') {h1.style.color = 'red';}
});

//WHEN SIGN ME UP BUTTONS ARE CLICKED THEY WILL BECOME DARKER BLUE, IF CLICKED AGAIN THEY WILL GO BACK TO ORIGINAL COLOR
//STOPPED PROPAGATION, CLICK DOES NOT TRIGGER THE CLICK EVENT OF THE BODY
let button = document.querySelectorAll('.btn');
button.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.stopPropagation();

        if (event.target.style.backgroundColor != 'blue'){
            event.target.style.backgroundColor = 'blue';
        }
        else if (event.target.style.backgroundColor === 'blue'){
            event.target.style.backgroundColor = '#17A2B8';
        }
    });
});

//RESIZE (TRIGGERS FOR EVERY PIXEL YOU CHANGE IN SIZE)
window.addEventListener('resize', (event) =>  {    
    paragraphText.forEach((element) => {
        element.style.color = 'yellow';
    });
});

//DOUBLE CLICKING ON AN IMAGE REMOVES THE IMAGE

let img = document.querySelectorAll('img');
img.forEach((element) => {
    element.addEventListener('dblclick', (event) => {
        element.remove();
    });
});

// WHEN YOU CLICK THE BODY THE BACKGROUND TURNS TO DARK GREEN 

body.addEventListener('click', (event) => {
    body.style.backgroundColor = 'darkgreen'
});

// WHEN YOU PRESS THE MOUSE BUTTON DOWN ON THE FOOTER THE BACKGROUND TURNS TO DARK RED

footer.addEventListener('mousedown', (event) => {
    footer.style.backgroundColor = 'darkred';
});

//WHEN THE PAGE FINISHES LOADING, IT APPENDS A NEW DIV TO THE NAV BAR

window.addEventListener('load', (event) => {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = 'Lorem ipsum doler sit amet.';
    document.querySelector('.container').appendChild(newDiv);
});

//SWITCHES BACK TO DAYTIME MODE WHEN THE D KEY IS RELEASED

document.addEventListener('keyup', (event) => {
    if (event.key === 'd') {
        body.style.backgroundColor = 'white';
        header.style.background = 'white';
        footer.style.background = '#FFEBCD';
        anchorText.forEach((element) => {element.style.color = 'black';});
        paragraphText.forEach((element) => {element.style.color = 'black';});
        h1.style.color = 'black';
        h2.forEach((element) => {element.style.color = 'black';});
        h4.forEach((element) => {element.style.color = 'black';});
    }
});

// PREVENTING ANCHOR TAGS FROM DEFAULT ACTION

anchorText.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    });
});

///////NOT WORKING

//LOAD STARTS TIMER FOR POP UP TO APPEAR, DOUBLE CLICK TO REMOVE POP UP
// document.addEventListener('load', (event) => { 
//     let myVar = popUp(myTimer, 1000);
//     let popUp = () => {
//         window.confirm('sometext');
//     };
// });
