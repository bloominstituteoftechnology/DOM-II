// Your code goes here
const allAnchorTags = document.querySelector('.nav');
const hiddenMessage = document.querySelector('.logo-heading');
const wholeBody = document.querySelector('body');
const topImage = document.querySelector('.top-image');
const clueOne = document.querySelector('#clue-one');
const clueTwo = document.querySelector('#clue-two');
const realityStone = document.querySelector('.reality-stone');
const spaceStone = document.querySelector('#space-stone');
const hiddenMessageTwo = document.querySelector('h4');
const aboutUs = document.querySelector('#about');
const blogButton = document.querySelector('#blog');







allAnchorTags.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    event.preventDefault();
});

hiddenMessage.addEventListener('mouseover', (event) => {
    hiddenMessage.innerHTML = 'Unlocked: Power Stone';
});

hiddenMessage.addEventListener('mouseout', (event) => {
    hiddenMessage.innerHTML = 'Fun Bus';
});

hiddenMessageTwo.addEventListener('mousedown', (event) => {
    hiddenMessageTwo.innerText = 'Avengers Unite!'
});

wholeBody.addEventListener('keypress', (event) => {
    alert('You\'ve unlocked one of the stones: Time Stone Acquired.');
});

wholeBody.addEventListener('wheel', (event) => {
    wholeBody.style.backgroundColor = "#4F4669";
    clueOne.innerHTML = 'I could just snap my fingers';
    clueTwo.innerHTML = 'And I call it mercy';
});

wholeBody.addEventListener('copy', (event) => {
    alert('Mind Stone Acquired.');
});

topImage.addEventListener('dblclick', (event) => {
    topImage.style.display = "none";     
    alert('What did it cost?');
    alert('Everything.');
    alert('Soul Stone Acquired');
});

realityStone.addEventListener('paste', (event) => {
    alert('At last. Reality Stone Acquired.');
});

spaceStone.addEventListener('drag', (event) => {
    spaceStone.innerHTML = 'Space Stone Acquired.';
});

aboutUs.addEventListener('click', (event) => {
    console.log('He clicked about us!');    
    blogButton.addEventListener('click', (event) => {
        console.log('He clicked the nested blog button ONLY');
        event.stopPropagation();        
    });
});

