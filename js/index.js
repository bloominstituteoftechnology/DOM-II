const textContent = document.querySelectorAll('p');
const logo = document.querySelector('.logo-heading');
const introImage = document.querySelector('.intro img')
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a')
const headings = document.querySelectorAll('h2');
const buttons = document.querySelector('.btn')
const imgs = document.querySelectorAll('img')

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

// 1. Change first paragraph to goldenrod on click
const textContentClickHandler = function() {
    if (onOff === 1) {
        textContent[0].style.color = 'goldenrod';
    } else {
        textContent[0].style.color = 'black';
    }
};

textContent[0].addEventListener('click', function() {
    toggle(onOff, textContentClickHandler);
});

// 2. Change second paragraph to italic on double click
const textContentDoubleClickHandler = function() {
    if (onOff === 1) {
        textContent[1].style.fontStyle = 'italic';
    } else {
        textContent[1].style.fontStyle = 'normal';
    }
};

textContent[1].addEventListener('dblclick', function() {
    toggle(onOff, textContentDoubleClickHandler);
});

// 3. Change third paragraph to pink background on mouseover
const textContentMouseOverHandler = function() {
    if (onOff === 1) {
        textContent[2].style.backgroundColor = 'rgb(252, 17, 169)';
    } else {
        textContent[2].style.backgroundColor = 'white';
    }
};

textContent[2].addEventListener('mouseover', function() {
    toggle(onOff, textContentMouseOverHandler);
});

// 4. Change the opacity of the intro (top) image every time a key is pressed
document.addEventListener('keydown', (event) => {
    introImage.style.opacity = `${Math.random()}`;
});

// 5. Mouse down on the logo changes the text color to red
const logoMouseDownHandler = function() {
    if (onOff === 1) {
        logo.style.color = "red";
    } else {
        logo.style.color = "black";
    }
};

logo.addEventListener('mousedown', function() {
    toggle(onOff, logoMouseDownHandler);
});

// 6. Mouse enters the top image inverts the color
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

// 7. Mouse moves in the header causes it to random colors
// SEIZURE WARNING
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

// 8. Change h2 colors if scrolled over
const pageWheelHandler = function() {
    let rand = Math.random();
    let red = 255; 
    let green = (255-50) * rand;
    let blue =  (255-200) * rand;
    this.style.color = `rgb(${red}, ${green}, ${blue})`;
};

 headings.forEach( head => {
     head.addEventListener('wheel', pageWheelHandler)
});

// 9. Create an alert when resizing the window
window.addEventListener('resize', function(event) {
    alert ("This page is responsive! 😄");
  });

  // 10. Create an alert trying to copy images
const copyHandler = function() {
    alert ("These images are copyrighted! 😠");
};

 imgs.forEach( img => {
     img.addEventListener('copy', copyHandler)
});

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click',(event) => {
        navLinks[i].style.color = "red";
        event.stopPropagation();
        event.preventDefault();
    })
  };