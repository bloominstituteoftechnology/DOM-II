// Your code goes here

const aNavElem = document.querySelectorAll('.nav a');
const logoElem = document.querySelector('.logo-heading');
const imgsElem = document.querySelectorAll('img');
const navBarElem = document.querySelector('.main-navigation');
const bodyElem = document.querySelector('body');
const txtAreaElem = document.querySelector('textarea');
const h2LetsElem = document.querySelector('.h2-lets');
const pTgsElem = document.querySelectorAll('p');

// ==================== Mouse click =================   CLICK
document.addEventListener('click', function(event){
    console.log ('You have clicked the mouse button!');
});


// ==============  Navigation Links =======  MOUSEOVER & MOUSEOUT
// (hovering over will show line under text and remove when not on text)
aNavElem.forEach(banana => {
    // banana.style.color = 'red';
    banana.addEventListener("mouseover", function(event){
        banana.style.textDecoration = 'underline';
    })
    banana.addEventListener("mouseout", function(event){
        banana.style.textDecoration = 'none';
    })
    // console.log(banana)
});


// ================== Navigation Logo ()
logoElem.addEventListener("mouseover", function(event){
    logoElem.style.color = 'blue';
    logoElem.style.fontSize = '5rem';

    logoElem.addEventListener('mouseout', function(event){
        logoElem.style.color = 'black';
        logoElem.style.fontSize = '4rem';
    });
});


// ================= Images ========== DOUBLECLICK
// (double click image to open in new window)
imgsElem.forEach(apple => {
    apple.addEventListener('dblclick', function(event){
        window.open(this.src);
    });
});


// ================= Navigation Bar ========== WHEEL
bodyElem.addEventListener('wheel', function(event){
    if(event.deltaY > 0 && window.scrollY > 0){
    navBarElem.style.backgroundColor = "lightblue";
    navBarElem.style.borderColor = "blue";
    }
    if(event.deltaY < 0 && window.scrollY === 0){
    navBarElem.style.backgroundColor = "white";
    navBarElem.style.borderColor = 'silver';
    }
});


// ================ Body ========== KEYDOWN / KEYUP
bodyElem.addEventListener('keydown', function(event){
    bodyElem.style.backgroundColor = 'darkgray';
    bodyElem.style.color = 'white';
    logoElem.style.color = '#212529';

    bodyElem.addEventListener('keyup', function(event){
        bodyElem.style.backgroundColor = 'white';
        bodyElem.style.color = '#212529';
    });
});


// ================ TextArea Tags ========== SELECT
txtAreaElem.addEventListener('select', function(){
    txtAreaElem.style.color = 'red';
});


// ================ H2 Lets Go ============ COPY
// copy the h2 that says Let's Go
h2LetsElem.addEventListener('copy', function(event){
    h2LetsElem.style.backgroundColor = 'gray';
    console.log(event);
});


// ================ P Tags =============== CONTEXTMENU
// right click on paragraphs
pTgsElem.forEach(lemon => {
    lemon.addEventListener('contextmenu', function(){
        lemon.style.backgroundColor = 'lightgray';
    });
});


// ================ Window ============== LOAD
window.addEventListener('load', function(){
    alert ('loading complete');
});


// ============= PREVENT DEFAULT
const aNavAbout = document.querySelector('.nav-link-1');
aNavAbout.addEventListener('click', function(event){
    event.preventDefault();
});

// ================ STOP PROPAGATE
aNavElem.forEach(banana => {
    banana.addEventListener('click', function(event){
        event.stopPropagation();
        console.log('Clicked on Nav Link');
    });
});


