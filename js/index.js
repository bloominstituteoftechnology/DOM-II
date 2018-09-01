// Your code goes here

const img = document.querySelector('.intro img');
img.addEventListener('dblclick', function () {
    img.style.hieght = '50px';
    img.style.width = '25px';
});

const footer = document.querySelector('footer');
footer.addEventListener('mouseover', function () {
    footer.style.backgroundColor = 'Hotpink';
});

const img2 = document.querySelector('.img-content img');
img2.addEventListener('contextmenu', function () {
    img2.style.height = '300px';
    img2.style.width = '25px';
});

const intro = document.querySelector('body');
intro.addEventListener('keyup', function () {
    intro.style.backgroundColor = 'Limegreen';
});

const adventureAwaits = document.querySelector('.inverse-content .text-content');
adventureAwaits.addEventListener('wheel', function () {
    adventureAwaits.style.display = 'flex';
    adventureAwaits.style.color = 'yellow';
});

const header = document.querySelector('header')
header.addEventListener('mouseleave', function () {
    header.style.display = 'none';
});

const destinationPick = document.querySelector('.content-pick');
destinationPick.addEventListener('copy', function () {
    destinationPick.style.flexDirection = 'column';
    destinationPick.style.color = 'white';
})

const navBar = document.querySelector('.nav');
navBar.addEventListener('mousemove', function () {
    navBar.style.flexDirection = 'row-reverse';
})

const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(navItem => {
    event.preventDefault();
    navItem.addEventListener('click', function () {
        navItem.style.color = 'red';
    })
})

const destination = document.querySelectorAll('.destination');
destination.forEach(item => {
    item.addEventListener('click', function () {
        item.style.backgroundColor = 'red';
        item.style.display = 'flex';
        item.style.flexDirection = 'column-reverse';
    })
})