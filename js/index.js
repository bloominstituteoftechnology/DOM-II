// Your code goes here

// scale image and have it go back
const image = document.querySelectorAll('img');
image.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 1s';
    });
});

image.forEach(img => {
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.transition = 'transform 1s';
    });
});

// change all p text on scroll 

const textScroll = document.querySelectorAll('p');
textScroll.forEach(txt => window.addEventListener('scroll', () => {
    txt.style.color = 'orange';
}))

//change color back to black on up arrow key 
const textDefault = document.querySelectorAll('p');
textDefault.forEach(txt => addEventListener(
    'keyup',
    () => {
        txt.style.color = 'black';

    }
));

// colors loop in nav bar
const click = document.querySelectorAll('nav')[0];
colors = ['hotpink', 'blue', 'teal', 'yellow'];

let colorIndex = 0;
click.addEventListener(
    'click', e => {
        e.target.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    },
    false
);
// Mouseover event on body with set timeout
let test = document.querySelector('body');
test.addEventListener(
    'mouseover',
    function (event) {
        event.target.style.color = 'purple';

        setTimeout(function () {
            event.target.style.color = '';
        }, 500)
    },
    false
)
// stop clicking nav
const stopNav = document.querySelector('nav');
stopNav.addEventListener('click', (event) => {
    alert('stop clicking me!');
    event.preventDefault();
})

// bottom click change color
const clicks = document.querySelectorAll('.destination, .btn');
clicks.forEach(btn => btn.addEventListener('click', (event) => {
    btn.style.backgroundColor = 'yellow';
    event.stopPropagation;
}));

// bottom click remove display
clicks.forEach(btn => btn.addEventListener('dblclick', () => {
    btn.style.display = 'none';
    event.stopPropagation();
}))

// mousedown and mouseup

let mouseDown = document.querySelector("h1");
mouseDown.addEventListener("mousedown", function (e) {
    e.target.style.backgroundColor = "red";
})

let mouseUp = document.querySelector("h1");
mouseUp.addEventListener("mouseup", function (e) {
    e.target.style.backgroundColor = "white";
})