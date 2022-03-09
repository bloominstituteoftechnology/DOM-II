import './less/index.less'

// Your code goes here!
const header = document.querySelector('.main-navigation');
function headerColor() {
    header.style.backgroundColor='green';
    header.style.color='black';
}
function headerColorRestore() {
    header.style.backgroundColor='white';
    header.style.color='black';
}
header.addEventListener('mouseover', headerColor); // 1
header.addEventListener('mouseout', headerColorRestore);// 2
function tellWhatKeyPressed(evt) {
    if (evt.key ===  ' ') {
        console.log("You pressed the spacebar!");
    } else {
        console.log(`You pressed the ${evt.key} key!`);
    }
    
}
document.addEventListener('keydown', tellWhatKeyPressed);//3

const wholeDoc=document.querySelector('*');
const button=document.querySelectorAll('.btn');

function darkModeOn(evt) {
    wholeDoc.style.backgroundColor='black';
    wholeDoc.style.color='white';
    console.log('Activated dark mode!');
}
function darkModeOff(evt) {
    wholeDoc.style.backgroundColor='white';
    wholeDoc.style.color='black';
    console.log('Turned off dark mode!');
}
const introPic=document.querySelector('.intro')
introPic.addEventListener('dblclick', darkModeOn); //4
introPic.addEventListener('click', darkModeOff); //5 

function loader() {
    console.log('You made it, cool.');
}

window.addEventListener('load', loader) //6 

const inputFocus=document.querySelector(".user-input");

function buttonFocus (evt) {
    inputFocus.style.backgroundColor='green';
}

inputFocus.addEventListener('focus', buttonFocus);// 7 