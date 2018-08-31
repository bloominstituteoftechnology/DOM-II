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


// let's do something annoying...shout if someone uses the scroll wheel
document.addEventListener('wheel', (e) => {
    window.alert('Wheeeeeeeeeeeeeee........llll!\nYou used the scroll wheel!');
});


// Okay, how's this...double clicking on any element makes it disappear.
// We need to stop propagation so it doesn't destroy the whole page.
// Further, we want to remember the element so that we can bring it back with
// another double-click

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


// Same drill but single-clicking on any element sets the font to zapf-dingbats
// I gotta say, I enjoyed playing with this one :)

const clickHandler = function(e) {
    e.stopPropagation();
    const target = e.target;
    const cur_font = target.style.fontFamily;
    if (cur_font) {
        target.style.fontFamily = "";
    } else {
        target.style.fontFamily = '"Zapf Dingbats", Wingdings, Symbol, sans-serif';
    }
};

// anything in the body is fair game!
body.addEventListener('click', clickHandler);

// Seven so far!

