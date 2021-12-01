// import './less/index.less'

// Your code goes here!

// change color on mouseover of logo heading
const logoHeading = document.querySelector('h1.logo-heading');
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function colorChange() {
    document.body.style.backgroundColor = `${getRandomColor()}`;
}
logoHeading.addEventListener('mouseover', colorChange);

// rotate through colors onclick - work in progress
var intervalID = ''; // I know I'm not supposed to use var but it's the only thing that works
let colorToggle = false;
function toggleColorChange() {
    colorToggle = !colorToggle;
    console.log('toggleworking');
    if(colorToggle){
        console.log(colorToggle);
        intervalID = setInterval(colorChange, 1000);
        console.log(intervalID);
    } else {
        clearInterval(intervalID);
    }
}
logoHeading.addEventListener('click', toggleColorChange);

// change font size of fun bus double click
let fontSize = 25;
const h2text = document.querySelector('h2');
function changeTextSize() {
    console.log(fontSize);
    h2text.style.fontSize = `${fontSize += 5}px`;
}

h2text.addEventListener('dblclick', changeTextSize);

// rotate through colors while scrolling -- this doesn't work more than once right now but I used the event listener hahaha

let scrollPosition = 0;
function colorScroll() {
    if(Math.abs(window.scrollY) >= scrollPosition + 200){
        colorChange();
        scrollPosition = window.scrollY;
    }
}
document.addEventListener('scroll', colorScroll); 

// revert background color to default on keypress
function reset(event) {
    if(event.key === "Escape"){
        document.body.style.backgroundColor = "white";
    }
}
document.addEventListener("keydown", reset);

// return back to random color upon key release, there is no escape

function resetReset(event) {
    if(event.key === "Escape"){
        colorChange();
    }
}
document.addEventListener("keyup", resetReset);

// actually reset color to white semi permanently if shift is pressed at the same time
function shiftEscape(event) {
    if(event.key === "Escape" && event.shiftKey === true){
        document.body.style.backgroundColor = "white";
    } 
}
document.addEventListener("keypress", shiftEscape);