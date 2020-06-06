// Your code goes here
const backgroundHeader = document.querySelector('.main-navigation')
backgroundHeader.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
});
backgroundHeader.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'white';
});
const navBar = document.querySelectorAll('.nav a')
navBar.forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'red';
    })
});
navBar.forEach((element) => {
    element.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
    })
});
const headerImg = document.querySelectorAll('img');
headerImg.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
    event.target.style.transform = 'scale(1.2)';
    })
});
headerImg.forEach((element) => {
    element.addEventListener('dblclick', (event) => {
    event.target.style.transform = 'scale(1)';
    })
});

const welcome = document.querySelector('.intro h2')
welcome.addEventListener('keydown', (e) => {
    if (e === 'k') {
    welcome.style.visibility = 'hidden';    
    }
} );

const letGo = document.querySelector('.content-section .text-content h2')
letGo.addEventListener('onwheel', (e) => {
    e.target.style.visibility = 'hiden';
});

const footerHeaders = document.querySelectorAll('.content-pick .destination p')
footerHeaders.forEach((element) => {
    element.addEventListener('mouseenter', (event) =>{
        event.target.style.color = 'red';
    })
});

footerHeaders.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
    event.target.style.transform = 'scale(1.2)';
    })
});




