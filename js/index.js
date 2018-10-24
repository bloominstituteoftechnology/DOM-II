// Your code goes here

const destinations = {
    funinthesun: {
        h4: 'Fun In The Sun',
        p: `Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.`
    },
    mountainexcursion: {
        h4: 'Mountain Excursion',
        p: `Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.`
    },
    islandgetaway: {
        h4: 'Island Getaway',
        p: `Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.`
    }
};

let packagesContent = document.querySelectorAll('.destinations > *');
let packagesContentContainer = document.querySelector('.content-pick div');
let selectBox = document.querySelector('form select');
let img = document.querySelectorAll('.container img');
let navItems = document.querySelectorAll('.nav-link');

for (let i = 0; i < img.length; i++) {
    img[i].classList.add('animated');
}

for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.add('animated');
    navItems[i].addEventListener('click', event => pulseNav(event));
}

function pulseNav(event) {
    event.target.classList.add('pulse');
}

function revealDescription(event) {
    packagesContent[0].textContent = destinations[event.target.value].h4;
    packagesContent[1].textContent = destinations[event.target.value].p;
    bounceIn();
}

function bounceIn() {
    packagesContentContainer.classList.add('bounceIn');
}

function shakeImg(event) {
    event.target.classList.add('jello');
}

selectBox.addEventListener('change', event => {
    revealDescription(event);
});

document.addEventListener('animationend', event => {
    event.target.classList.remove('bounceIn', 'jello', 'pulse');
});

img.forEach(item =>
    item.addEventListener('mouseover', event => {
        shakeImg(event);
    })
);

navItems.forEach(item =>
    item.addEventListener('click', event => {
        pulseNav(event);
        event.preventDefault();
    })
);

document.addEventListener('scroll', {});
