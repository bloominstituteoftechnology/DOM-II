// Your code goes here
//Initial commit 

// * Create 10 unique event listeners 

// 1. changes 'Fun in The Sun CTA font from red to blue'
let grabButton = document.querySelector('.destination');

let buttonCTA = document.querySelector('.btn');

grabButton.addEventListener('click', () => {
    buttonCTA.style.color = 'blue';
});

