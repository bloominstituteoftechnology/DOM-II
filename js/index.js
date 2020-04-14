
// 1
const logoText = document.querySelector(".logo-heading");
logoText.addEventListener('mouseover', (e) => {
    logoText.style.transform = 'scale(1.6)';
})

// 2
logoText.addEventListener('mouseleave', (e) => {
    logoText.style.transform = 'scale(1.0)';
})

// 3
const navLinks = document.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        link.style.color = "red";
    })
})

// 4
document.getElementsByClassName('.nav-link');
addEventListener('click', (e) => {
    event.preventDefault();
})

// 5
const btn = document.querySelector('.btn');
btn.addEventListener('mousemove', (e) => {
    alert('This is an alert');
});

// 6
const mainPage = document.querySelector('html');
mainPage.addEventListener('keydown', (e) => {
mainPage.style.backgroundColor = "grey";
})

// 7
const nav = document.querySelector('.main-navigation');
nav.addEventListener('dblclick', (e) => {
    mainPage.style.backgroundColor = "yellow";
    event.stopPropagation();
})

// 8
const headers = document.querySelectorAll('h2');
headers.forEach(head => {
    head.addEventListener('copy', (e) => {
        head.style.backgroundColor = "yellow";
    })
})

// 9
const busImg = document.querySelector('.intro img');
busImg.addEventListener('click', (e) => {
    busImg.style.visibility = "hidden";
})

// 10
const boatImg = document.querySelector(".content-destination img");
boatImg.addEventListener('drag', (e) => {
    boatImg.style.border = '10px solid green';
})
