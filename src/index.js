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

document.addEventListener('dblclick', darkModeOn); //4
document.addEventListener('click', darkModeOff); //5 
const intro = document.querySelector('.intro');
console.log(intro);
