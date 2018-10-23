// Your code goes here

//document.querySelectorAll('');
//document.querySelector('');

const images = Array.from(document.querySelectorAll('img'));
const header = document.querySelector('header');
const links = Array.from(document.querySelectorAll('a'));
const container = document.querySelector('.home');
let currentBackground = 'white-background'
const paragraph = Array.from(document.querySelectorAll('p'));


console.log(links);

// 1 ; 1 - 4
let color = ['red-background', 'blue-background', 'yellow-background', 'white-background'];
let colorText = ['red-text', 'blue-text', 'yellow-text', 'white-text'];
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseenter', function (event) {
        header.classList.remove(currentBackground);
        currentBackground = color[i];
        header.classList.add(currentBackground);
    });
}

// 2 ; 2 - 8
let saveHome;
//saveHome = saveHome.slice(0);
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        header.classList.remove(currentBackground);
        currentBackground = color[i]
        console.log(header)
        header.classList.add(currentBackground);
        setTimeout(() => {
            header.classList.remove(currentBackground);
        }, 1000)
    });
}

// 3 ; 9
container.addEventListener('mouseleave', function (event) {
    document.querySelector('.logo-heading').classList.add('blink');
    header.classList.remove(currentBackground);
    currentBackground = 'green-background';
    header.classList.add(currentBackground);
});

// header.addEventListener('mouseleave', function (event) {
//     container.style.display = 'block';
//     document.querySelector('.logo-heading').classList.remove('blink');
// });

// 4 ; 10
header.querySelector('.logo-heading').addEventListener('dblclick', function (event) {
    document.querySelector('.logo-heading').classList.remove('blink');
});

console.log(paragraph)

//5
paragraph.map(function (element) {
    element.addEventListener('copy', function (event) {
        console.log('here')
        document.body.style.backgroundColor = 'pink';
    })
})

//6
let i = 0;
let bodyBackground = 'white-background';
window.addEventListener('keydown', (event) => {
    document.body.classList.remove(bodyBackground);
    bodyBackground = colorText[i];
    console.log(color[i])
    document.body.classList.add(bodyBackground);
    i++;
    if (i >= 4) i = 0;
})