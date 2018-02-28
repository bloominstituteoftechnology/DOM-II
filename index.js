//get array from .block class HTML list object
const blocksArray = Array.from(document.getElementsByClassName('block'));

let margin = 25;
let upInterval;
let downInterval;

//creat a function for incrementing margin-left
const travelForth = (i) => {
    clearInterval(downInterval);
    document.documentElement.addEventListener('mouseup', () => {
        travelBack(i);
    });
    upInterval = setInterval(() => {
        margin = margin + 10;
        blocksArray[i].style.marginLeft = `${margin}px`;
    }, 100);
}

//create a function for decrementing the margin-left
const travelBack = (i) => {
    clearInterval(upInterval);
    downInterval = setInterval(() => {
        if (margin < 25) {
            clearInterval(downInterval);
            return;
        }
        margin -= 10 ;
        blocksArray[i].style.marginLeft = `${margin}px`;
    }, 100);
}

//set event listener for mousdown and mouseup
const addListeners = (i) => {
    blocksArray[i].addEventListener('mousedown', () => {
        travelForth(i);
    });
}

//apply both functions to each block
blocksArray.forEach((element, number) => {
    addListeners(number);
});