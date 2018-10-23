// Your code goes here

//document.querySelectorAll('');
//document.querySelector('');

const images = Array.from(document.querySelectorAll('img'));
const header = document.querySelector('header');
const links = Array.from(document.querySelectorAll('a'));
const container = document.querySelector('.home');


console.log(links);

// 1 ; 1 - 4
let color = ['red', 'blue', 'yellow', 'white'];
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseenter', function (event) {
        header.style.backgroundColor = color[i];
    });
}

// 2 ; 2 - 8
let saveHome = document.querySelector('.home').nodeValue;
//saveHome = saveHome.slice(0);
console.log(saveHome, 'here')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        document.body.style.backgroundColor = 'white';
        document.querySelector('.home').style.display = 'block';
        console.log(event.target.childNodes[0].data)
        document.querySelector('.home').innerHTML = `<header class="intro"><h2>You clicked ${event.target.childNodes[0].data} button</h2</header>`;
    });
}

// 3 ; 9
container.addEventListener('mouseleave', function (event) {
    container.style.display = 'none';
    document.querySelector('.logo-heading').classList.add('blink');
});

// header.addEventListener('mouseleave', function (event) {
//     container.style.display = 'block';
//     document.querySelector('.logo-heading').classList.remove('blink');
// });

// 4 ; 10
header.querySelector('.logo-heading').addEventListener('dblclick', function (event) {
    document.querySelector('.home').appendChild = saveHome;
    container.style.display = 'block';
    document.querySelector('.logo-heading').classList.remove('blink');
});