// Your code goes here

const backgroundHeader = document.querySelector('.main-navigation')
backgroundHeader.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'blue';
});
backgroundHeader.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'white';
});
const logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('click', (event) => {
    
    logoHeading.style.backgroundColor = 'purple';
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
document.addEventListener('keypress', (e) => {
    if (e.key === 'd') {
    welcome.style.visibility = 'hidden';  
      
    }
} );

const letGo = document.querySelector('.content-section .text-content h2')
document.addEventListener('wheel', (e) => {
    letGo.style.visibility = 'hidden';
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

const homeLink = document.querySelector('.main-navigation .nav .nav-link')
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked, but prevented');
})


