// Your code goes here
const logo = document.querySelector('.logo-heading')
const welcome = document.querySelector('.intro h2')
const image = document.getElementsByTagName('img')
const destinations = document.querySelectorAll('.destination p')
const body = document.querySelector('body')

window.addEventListener('load', () => {
    alert('welcome');
})

window.addEventListener('resize', () => {
    console.log('Resizing');
});

logo.addEventListener('mouseenter', () => {
    logo.style.transform = 'scale(1.5)';
})

logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1)';
})

logo.addEventListener('dblclick', (event) =>
    logo.textContent = 'Not So Fun Bus'
)

welcome.addEventListener('click', (event) => {
    welcome.style.textAlign = 'center';
    event.stopPropagation();
})

body.addEventListener('click', (event) => {
    body.style.color= 'green';
} )

document.addEventListener('keydown', (event) => {
image[0].style.transform = 'rotate(180deg)';
})

document.addEventListener('keyup', (event) => {
    image[0].style.transform = 'rotate(360deg)';
})

destinations.forEach(destination => {
    destination.addEventListener('wheel', (event) => {
        destination.style.fontSize = '2.2rem';
    })
})

document.addEventListener('scroll', (event) => {
        image[3].style.transform = 'rotate(180deg)';
})