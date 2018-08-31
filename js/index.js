// Your code goes here
// keydown & keyup & load
const container = document.querySelector('.container');
container.addEventListener('keydown', () => {
    console.log('Take your stinking paws off me you &#$@ dirty ape!');
    container.addEventListener('keyup', e => {
        console.log('That is right, son. Go sit down.');
    });
    container.addEventListener('load', () => {
        console.log('All loaded for you.');
    })
});

// scroll
container.addEventListener('scroll', () => {
    console.log('Take a scroll, jive turkey');
});

//resize
container.addEventListener('resize', () => {
    console.log('Resizing');
});

// stop prop
const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', e => {
    e.target.style.color = '#99CC00';
    e.stopPropagation();
});

// click & mouseover
const homeLink = document.querySelector('#home-link');
homeLink.addEventListener('click', e => {
    e.preventDefault();
    homeLink.addEventListener('mouseover', e => {
        e.target.style.color = 'lightblue';
    });
});

// fun
const bus = document.querySelector('.home .content-section img');
bus.addEventListener('wheel', e => {
    TweenMax.fromTo(bus, 1, { opacity: 1.5 }, { opacity: 0.8, repeat: 1, yoyo: true, ease: Sine.easeInOut });
});

// dblclick
const image = document.querySelectorAll('img');
image.addEventListener('dblclick', e => {
    image.style.opacity = 0.6;
});

// select
const paragraph = document.querySelectorAll('p');
paragraph.addEventListener('select', e => {
    e.target.style.color = 'whitesmoke';
});
