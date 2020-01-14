// Your code goes here

// mouseenter event

let missedTheBus = document.querySelector('h1');
missedTheBus.addEventListener('mouseenter', () => {
    missedTheBus.style.backgroundColor = 'greenYellow';
    missedTheBus.style.color = 'white';
})

// mouseleave event

missedTheBus.addEventListener('mouseleave', () => {
    alert("You're going to miss the fun!");
})