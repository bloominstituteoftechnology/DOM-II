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
img2.addEventListener('click', function () {
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
});


