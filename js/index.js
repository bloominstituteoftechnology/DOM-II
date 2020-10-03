// Your code goes here
// 1 KEY DOWN
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 72 /*H*/ ) {
        window.alert("The page is fully loaded! Enter at your own risk....");
    } else(window.alert("You don't know which key to press; you need an education! Didn't your mother raise you right?!"));
});

//2 MOUSEUP 
const mouse1 = document.querySelector('.intro');
mouse1.addEventListener('mouseup', function() {
    window.alert('You discovered the intro. You get a gold star!');
})

// 3 CLICK COUNTER
const clickEvent = document.querySelector('.btn');

clickEvent.addEventListener('click', event => {
    clickEvent.innerHTML = `Click count: ${event.detail}`;
});

// 4 MOUSEENTER/LEAVE FUN BUS
const logoHeader = document.querySelector('.logo-heading');
logoHeader.addEventListener('mouseenter', function() {
    logoHeader.style.color = "#ed246a";
    logoHeader.addEventListener('mouseleave', function() {
        logoHeader.style.color = "black";
    });
});