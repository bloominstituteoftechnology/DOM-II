import './less/index.less'

// Your code goes here!
const header = document.querySelector('.main-navigation');
function headerColor() {
    header.style.backgroundColor='green';
}
function headerColorRestore() {
    header.style.backgroundColor='white';
}
header.addEventListener('mouseover', headerColor);
header.addEventListener('mouseout', headerColorRestore);
function tellWhatKeyPressed(evt) {
    if (evt.key === ' ') {
        console.log("You pressed the spacebar!");
    } else {
        console.log(`You pressed the ${evt.key} key!`);
    }
    
}
document.addEventListener('keydown', tellWhatKeyPressed);