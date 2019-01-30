// Your code goes here

// Navigation Header
const navigationHeader = document.getElementsByClassName('logo-heading');

// Changing color when mousing over header
navigationHeader[0].addEventListener('mouseover', e => {
    event.target.style.color = "purple";
});

// Changing to orange on click
navigationHeader[0].addEventListener('click', e => {
    event.target.style.color = "orange";
});


// Changing to green when mousing out
navigationHeader[0].addEventListener('mouseout', e => {
    event.target.style.color = "green";
});

// Adding Scroll Event Listener

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const scrollable = 1310;
    if(scrolled === scrollable){
        alert(`Don't click the buttons..`);    
    }
});

// Adding Keypress Event Listener

const body = document.getElementsByTagName('body')

body[0].addEventListener('keydown', e => {
    event.target.style.backgroundColor = 'green';
})

body[0].addEventListener('keyup', e => {
    event.target.style.backgroundColor = 'red';
})

// Adding Click Event Listener 

const buttons = document.getElementsByClassName('btn');
buttons[0].addEventListener('click', e => {
    alert('Ouch! That Hurt!')
})

buttons[1].addEventListener('click', e => {
    alert('Okay, really stop.')
})


buttons[2].addEventListener('click', e => {
    alert(`This isn't funny anymore!`)
})











