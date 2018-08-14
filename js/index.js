// Your code goes here
document.querySelector('title').innerText = 'Fun Bus Travel Agency - ????';
document.querySelector('.content-destination > img').alt = 'I\'m on a boat!';

const navigation = document.querySelectorAll('.nav-link');
navigation.forEach((navLink) => {
    navLink.addEventListener('mouseover', (event) => { 
        event.currentTarget.style.color = 'purple';
    })
});

const navHead = document.querySelector('.logo-heading');
let fntSize = 3;
navHead.addEventListener('wheel', (event) => {
    fntSize += 0.1;
    event.currentTarget.style.fontSize = fntSize + 'rem';
    event.stopPropagation();
});

const bod = document.querySelector('body');
bod.addEventListener('keydown', (event) => {
    document.title += event.key;
});

const introImg = document.querySelector('.intro img');
introImg.addEventListener('dragstart', (event) => {
    event.currentTarget.style.transform = 'rotate(180deg)';
});


