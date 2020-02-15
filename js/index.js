// Your code goes here
// mouseenter event

let missedTheBus = document.querySelector('h1');
missedTheBus.addEventListener('mouseover', () => {
    missedTheBus.style.backgroundColor = '#f4ff61';
    missedTheBus.style.color = 'black';
})

// mouseleave event

missedTheBus.addEventListener('mouseleave', () => {
    alert("Don't miss the fun!");
})

// dblclick event

let changePic = document.querySelector('.intro img');
changePic.addEventListener('dblclick', () => {
    changePic.src = 'https://files.constantcontact.com/726779ab001/79b55cdc-020c-4b53-8e96-d4c21ffdb181.jpg?a=1125872615244';
})

// resize event

let newSize = document.querySelector('.intro img');

window.addEventListener('resize', () => {
    newSize.style.display = 'none';

}) 