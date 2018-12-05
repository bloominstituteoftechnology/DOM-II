// Your code goes here
 // mouseover, keydown, wheel, drag / drop, load, focus, resize, scroll, select, dblclick

// ======================= 1. CLICK the 'Fun Bus' heading to make the nav items change to random colors
const logo = document.querySelector('.logo-heading');
const navItems = document.querySelectorAll('a');

logo.addEventListener('click', function(e) {
    navItems.forEach(item => item.style.color = getColor());
});

function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;    
};

// ======================= 2. MOUSEOVER the 'Fun Bus' image   (((figure out why only working once)))
const topImg = document.querySelector('.intro img');

topImg.addEventListener('mouseover', function(e) {
    TweenMax.to('.intro img', 3, {rotationY:360});T
    TweenMax.set(topImg, {clearProps:'all'});
});

// ======================  3. KEYDOWN anywhere in the window to change the textContent of 'Welcome to Fun Bus'
const keyChange = document.querySelector('.intro h2');

window.addEventListener('keydown', function(e) {
    keyChange.textContent = e.key;
});

// ======================  4. drag  
const mapImg = document.querySelector('.adventure');
const mapParagraph = document.querySelector('.intro p')
mapImg.addEventListener('drag', function(e) {
    mapParagraph.style.color = 'blue';
});

// ====================== 5. LOAD the page and set the background to a random color
const body = document.querySelector('body');
window.addEventListener('load', function(e) {
    body.style.background = getColor();
});

// ====================== 6. FOCUS on the input to get the background to change to a random color
const focus = document.querySelector('.focus');
focus.addEventListener('focus', function(e) {
    focus.style.background = getColor();
})

// ====================== 7. RESIZE the window to change the background of body to a different color
window.addEventListener('resize', function(e) {
    mapParagraph.style.color = getColor();
})

// ====================== 8. SCROLL on the page to see some effects
const navContainer = document.querySelector('.nav-container');
window.addEventListener('scroll', function(e) {
    navContainer.style.background = getColor();
})

// ====================== 9. SELECT text from the focus input box and get an alert
focus.addEventListener('select', function(e) {
    alert(`You selected text!`)
})

// ====================== 10. DBLCLICK the first sign-up button
const buttons = document.querySelectorAll('.btn');
buttons.forEach((item) => item.addEventListener('dblclick', function(e) {
    item.style.background = getColor();
}));

// ================ Stop the propagation of an event
const stopProp = document.querySelector('.stopProp');
stopProp.addEventListener('click', function(e) {
    stopProp.style.background = getColor();
    e.stopPropagation();
})

window.addEventListener('click', function(e) {
    stopProp.style.background = 'white';
})

// ================= Stop the 'a' tags from refreshing the page
const aTags = document.querySelectorAll('a');
aTags.forEach((item) => item.addEventListener('click', function(e) {
    e.preventDefault();
}));