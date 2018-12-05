// Your code goes here
const navTag = document.querySelector('.nav');

navTag.addEventListener('mouseover', color => {
    color.preventDefault()
    color.target.style.color = '#ffc300';
    color.target.style.fontWeight = 'Bold';
});

navTag.addEventListener("focus", key => {
    key.style.backgroundColor = "green"
})


// Heading 
const logoHeading = document.querySelector('.nav-container h1');

logoHeading.addEventListener('wheel', function(key) {
    key.target.style.fontSize = '50px';
    key.target.style.color = 'red';
    key.target.style.fontWeight = 'Bold';
});

//Header Image
const funBusImg = document.querySelector('img');

funBusImg.addEventListener('dblclick', key => {
    key.target.style.borderRadius = '100px';
});

//Lets Go
const adventureImg = document.querySelector('.img-content img');

adventureImg.addEventListener('load', function(key) {
    key.target.style.border = '4px solid #ffc300';
});

const container = document.querySelector('.text-content h2');

container.addEventListener('drag', () => {
    container.textContent = 'Lets Go Where???';
});

const welcome = document.querySelector('.intro h2');

window.addEventListener('scroll', () => {
    welcome.textContent = 'The fun Bus is Leaving...';
    welcome.style.fontWeight = 'Bold';
    welcome.style.color = 'red'
});

const body = document.querySelector('.home');

window.addEventListener('resize', () => {
    body.style.backgroundColor = 'grey';
});