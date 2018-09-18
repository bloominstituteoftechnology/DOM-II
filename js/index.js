// Your code goes here

// Event 1: mouseover
const homeLink = document.querySelector('.home-link');
homeLink.addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';
});

// Event 2: keydown
// I think this is a pretty contrived example
const aboutLink = document.querySelector('.about-link');
aboutLink.addEventListener('keydown', (event) => {
    event.target.innerText = 'keydown tripped!';
});

// Event 3: copy
const blogLink = document.querySelector('.blog-link');
blogLink.addEventListener('copy', (event) => {
    console.log('Don\'t copy me! I barely earn a living as it is!');
});

// Event 4: 
