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
    TweenMax.to('.intro img', 1, {rotationY:180});
});

// ======================  3. KEYDOWN anywhere in the window to change the textContent of 'Welcome to Fun Bus'
const keyChange = document.querySelector('.intro h2');

window.addEventListener('keydown', function(e) {
    keyChange.textContent = e.key;
})

// ======================  4. drag   ((figure out drop))
const mapImg = document.querySelector('.adventure');
const mapParagraph = document.querySelector('.intro p')
mapImg.addEventListener('drag', function(e) {
    mapParagraph.style.color = 'blue';
});

// ====================== 5. load
const body = document.querySelector('body');
window.addEventListener('load', function(e) {
    body.style.background = 'lightblue';
})








