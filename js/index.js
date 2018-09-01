/*
    Fun Bus
*/

// First, let's turn off the default response for the nav-bar links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach( link => {
  link.addEventListener('click', (e) => { e.preventDefault(); });
});

// Now let's embiggen the links when we hover over them (we could do this
// with CSS alone, but let's do this here to practice our JS skills)

const linkOverHandler = function(e) {
  e.target.style.fontSize = '2.0rem';
  e.target.style.fontWeight = 'bold';
};

const linkLeaveHandler = function(e) {
  e.target.style.fontSize = '';
  e.target.style.fontWeight = '';
};

navLinks.forEach( link => {
  link.addEventListener('mouseover', linkOverHandler);
  link.addEventListener('mouseleave', linkLeaveHandler);
});

// so far 2 events...

// Let's have certain keypresses highlight the corresponding paragraphs in the body text
const welcome = document.querySelector('.intro');
const letsgo = document.querySelector('.content-section');
const adventure = document.querySelector('.inverse-content');
const pick = document.querySelector('.content-destination');
const fun = document.querySelector('.content-pick .destination:nth-child(1)');
const mountain = document.querySelector('.content-pick .destination:nth-child(2)');
const island = document.querySelector('.content-pick .destination:nth-child(3)');

const keymap = {
    'w': welcome,
    'l': letsgo,
    'a': adventure,
    'p': pick,
    'f': fun,
    'm': mountain,
    'i': island
};

const keydownHandler = function(e) {
    const ch = e.key.toLowerCase();
    if (keymap.hasOwnProperty(ch)) {
        keymap[ch].style.backgroundColor = 'lightgray';
    }
};

const keyupHandler = function(e) {
    const ch = e.key.toLowerCase();
    if (keymap.hasOwnProperty(ch)) {
        keymap[ch].style.backgroundColor = '';
    }
};

document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', keyupHandler);

// up to 4...

// let's do something annoying...shout if someone uses the scroll wheel
document.addEventListener('wheel', (e) => {
    window.alert('Wheeeeeeeeeeeeeee........llll!\nYou used the scroll wheel!');
});

// that makes 5

// How's this...double clicking on any element makes it disappear.
// We need to keep track of the element so that we can bring it 
// back with another double-click (anywhere on the page).
// We need to stop propagation so it doesn't destroy the whole page.

let blottedElement = null;

const dblclickHandler = function(e) {
    e.stopPropagation();
    const target = e.target;
    if (blottedElement === null) {
        blottedElement = target;
        target.style.display = 'none';
    } else {
        blottedElement.style.display = '';
        blottedElement = null;
    }
};

// anything in the body is fair game!
const body = document.querySelector('body');
body.addEventListener('dblclick', dblclickHandler);

// up to 6!

// Same drill but right-clicking on any element sets the font to zapf-dingbats.
// Right-clicking again will toggle it back to normal. (Originally had this set
// to click instead of auxclick, but that was just too obnoxious)
// Context-menu will still appear -- even invoking e.preventDefault() did
// not change this behavior.
const auxclickHandler = function(e) {
    e.stopPropagation();
    const target = e.target;
    if (target.style.fontFamily) {
        target.style.fontFamily = '';
    } else {
        // I think this is correct but don't have a Mac/Unix device for testing
        target.style.fontFamily = '"Zapf Dingbats", Wingdings, Symbol, sans-serif';
    }
};

// anything in the body is fair game!
body.addEventListener('auxclick', auxclickHandler);

// Seven so far!

// Complain if the user tries to drag something
// (Nothing is set up to be draggable in the page, but
//  attempting a dragging motion will trigger the event.)
document.addEventListener('dragstart', (e) => {
    window.alert('OOOUUUCCCHHH!\nStop pulling on me!');
});

// Eight!

// Make things fade if the window is resized.
// This one only applies to the window object.
const originalHeight = window.innerHeight;
const originalWidth = window.innerWidth;

const resizeHandler = function(e) {
    const newHeight = e.target.innerHeight;
    const newWidth = e.target.innerWidth;
    let opacity = (originalWidth * originalHeight) / (newWidth * newHeight);
    if (opacity > 1) {
        opacity = 1.0 / opacity;
    }
    body.style.opacity = opacity;
};

window.addEventListener('resize', resizeHandler); 

// Nine!

// What to do now?
// Make the background get darker as we scroll down through the page
const scrollHandler = function(e) {
    const scroll = window.scrollY;
    const pct = Math.max(100 - Math.floor(scroll / 20), 0);
    body.style.backgroundColor = `rgb(${pct}%, ${pct}%, ${pct}%)`;
};

window.addEventListener('scroll', scrollHandler);

// Ten and we're out!
