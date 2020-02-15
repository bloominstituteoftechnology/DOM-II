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

