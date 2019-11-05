const textContent = document.querySelectorAll('p');
const logo = document.querySelector('.logo-heading');
const introImage = document.querySelector('.intro img')
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a')
const headings = document.querySelectorAll('h4');
const buttons = document.querySelector('.btn')
const imgs = document.querySelector('.content-destination img')


let onOff;

function toggle(value, cb) {    
    if (value === 1) {
        cb();
        onOff = 0;
    } else {
        cb();
        onOff = 1;
    }
};

console.log(textContent.length);
//1. Make window smaller for popup
window.addEventListener('resize', function(event) {
    alert ("This page is responsive! 😄");
  });
//2. Change colors
const textContentClickHandler = function() {
    if (onOff === 1) {
        textContent[0].style.color = 'orange';
    } else {
        textContent[0].style.color = 'black';
    }
};
textContent[0].addEventListener('click', function() {
    toggle(onOff, textContentClickHandler);
});
//3. Change font style

const makeitFancy= function (){
    if (onOff ===1){
        textContent[1].style.fontStyle='italic';
    }
    else{
        textContent[1].style.fontStyle='normal';
  }
};
textContent[1].addEventListener('dblclick', function(){
    toggle(onOff, makeitFancy);
});
//4. change color
const textContentMouseOverHandler= function(){
    if (onOff ===1){
        textContent[2].style.backgroundColor="purple";
    }
    else{
        textContent[2].style.backgroundColor="yellow";
    }
};

textContent[2].addEventListener("mouseover", function(){
    toggle(onOff, textContentMouseOverHandler)});
//5. random opacity 
document.addEventListener('keydown', (event)=>{

    introImage.style.opacity=`${Math.random()}`;
});


//6.
const logoChange= function(){
    if (onOff ===1){
        logo.style.color ="blue";
    }
    else{
        logo.style.color="black";
    }
};

logo.addEventListener('mousedown', function(){
    toggle(onOff, logoChange)
});
//7. Invert Logo Color
const introImageEventHandler = function() {
    if (onOff === 1) {
        introImage.style.filter = 'invert(100%)';
    } else {
        introImage.style.filter = 'invert(0%)';
    }
};

introImage.addEventListener('mouseenter', function() {
    toggle(onOff, introImageEventHandler);
});
//8. NavBar change color quickly
let num = 1;
const backgroundEventHandler = function() {
    num = Math.floor(Math.random() * 10);

    switch (num) {
        case 0: header.style.backgroundColor = 'deeppink'; break;
        case 1: header.style.backgroundColor = 'red'; break;
        case 2: header.style.backgroundColor = 'aqua'; break;
        case 3: header.style.backgroundColor = 'chartreuse'; break; 
        case 4: header.style.backgroundColor = 'coral'; break;
        case 5: header.style.backgroundColor = 'cyan'; break;
        case 6: header.style.backgroundColor = 'greenyellow'; break;
        case 7: header.style.backgroundColor = 'darkblue'; break;
        case 8: header.style.backgroundColor = 'mintcream'; break;
        case 9: header.style.backgroundColor = 'orangered'; break;
        default: header.style.backgroundColor = 'white';
    }
};

header.addEventListener('mousemove', function() {
    toggle(onOff, backgroundEventHandler);
});
9.
const textContentMouseOverHandler2 = function() {
    if (onOff === 1) {
        textContent[3].style.backgroundColor = 'pink';
    } else {
        textContent[3].style.backgroundColor = 'white';
    }
};

textContent[3].addEventListener('mouseover', function() {
    toggle(onOff, textContentMouseOverHandler2);
});
const textContentMouseOverHandler3 = function() {
    if (onOff === 1) {
        textContent[4].style.backgroundColor = 'grey';
    } else {
        textContent[4].style.backgroundColor = 'orange';
    }
};

textContent[4].addEventListener('mouseover', function() {
    toggle(onOff, textContentMouseOverHandler3);
});
//10.
for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('dblclick',(event) => {
        navLinks[i].style.color = "red";
        event.stopPropagation();
        event.preventDefault();
    })
  };