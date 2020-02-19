// Your code goes here

// 1
const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', (e) => {
    logo.style.color = 'red';
})

// 2
const busImage = document.querySelector('.intro img');
busImage.addEventListener('mouseover', (e) => {
    busImage.style.transform = 'scale(1.1)';
})

busImage.addEventListener('mouseleave', (e) => {
    busImage.style.transform = 'scale(1.0)';
})

// 3
const paragraph = document.querySelectorAll('p');
paragraph.forEach(para => {
    para.addEventListener('copy', (e) => {
        para.style.backgroundColor = "yellow";
    });
});

// 4

const adventureImg = document.querySelector('.img-content img');
adventureImg.addEventListener('mousemove', (e) => {
    alert('Click the sign up button below!');
});

// 5

const funImg = document.querySelector('.inverse-content img');
funImg.addEventListener('drag', (e) => {
    funImg.style.border = '5px solid red'
});

// 6

const homepage = document.querySelector('html');
homepage.addEventListener('wheel', (e) => {
    homepage.style.backgroundColor = 'lightblue';
})

// 7 

const navBar = document.querySelector('.main-navigation');
navBar.addEventListener('dblclick', (e) => {
    homepage.style.backgroundColor = 'red';
    event.stopPropagation();
})

// 8
document.getElementsByClassName('.nav-link');
addEventListener('click', (e) => {
    event.preventDefault();
})

// 9
const boatImg = document.querySelector('.content-destination img');
boatImg.addEventListener('mouseover', (e) => {
    boatImg.style.transform = 'rotateY(180deg)'
    boatImg.style.transitionDuration = '2s';
})

// 10
const footer = document.querySelector('.footer');
footer.addEventListener('mouseleave', (e) => {
    footer.style.visibility = "hidden";
})