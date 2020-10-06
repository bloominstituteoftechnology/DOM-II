// Your code goes here
// 1-2 KEY DOWN
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 72 /*H*/ ) {
        window.alert("The page is fully loaded! Enter at your own risk....");
    } else(window.alert("You don't know which key to press; you need an education! Didn't your mother raise you right?!"));
});

//3-4 MOUSEUP 
const mouse1 = document.querySelector('.intro');
mouse1.addEventListener('mouseup', function() {
    window.alert('You discovered the intro. You get a gold star!');
})

// 5 CLICK COUNTER
const clickEvent = document.querySelector('.btn');

clickEvent.addEventListener('click', event => {
    clickEvent.innerHTML = `Click count: ${event.detail}`;
});

// 6-7 MOUSEENTER/LEAVE FUN BUS
const logoHeader = document.querySelector('.logo-heading');
logoHeader.addEventListener('mouseenter', function() {
    logoHeader.style.color = "#ed246a";
    logoHeader.addEventListener('mouseleave', function() {
        logoHeader.style.color = "black";
    });
});

// 8-9 FOCUS/BLUR
const navi = document.querySelectorAll('.nav-link');
navi.forEach(function(link) {
    link.addEventListener('focus', function() {
        link.style.color = 'blue';
        link.addEventListener('blur', function() {
            link.style.color = "red";
        })
    })
});

//10 SCROLL
window.addEventListener("close", function(event) {
    event.preventDefault();
}, false);