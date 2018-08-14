// Your code goes here

const container = document.querySelector('.container');
const navLinks = document.querySelector('nav-link');
const logo = document.querySelector('.logo-heading');
const homeLink = document.querySelector('#home-link');
const images = document.querySelectorAll('img');
const paragraphs = document.querySelectorAll('p');

container.addEventListener('scroll', ()=> {
    console.log('Scrollin scrollin scrollin');
});

container.addEventListener('keydown', (event)=>{
    console.log('Stop pressing keys!');
    container.addEventListener('keyup', (event)=>{
        console.log('Thank you.');
    });
    container.addEventListener('load', ()=>{
        console.log(`I'm done loading!`);
    })
});

container.addEventListener('resize', (event)=>{
    console.log('You are resizing me!');
});

navLinks.addEventListener('click', ()=> {
    navLinks.classList('vanish');
    navLinks.addEventListener('auxclick', (event)=>{
        event.preventDefault();
    });
});

logo.addEventListener('click', (event)=>{
    event.target.style.color = 'cadetblue';
    event.stopPropagation();
});

homeLink.addEventListener('click', (event)=>{
    event.preventDefault();
    homeLink.addEventListener('mouseover', ()=>{
        event.target.style.color = 'lightgray';
    });
});

images.addEventListener('dblclick', (event)=>{
    images.style.opacity = 0.5;
});

paragraphs.addEventListener('select', (event)=>{
    event.target.style.color = 'lightgray';
});


