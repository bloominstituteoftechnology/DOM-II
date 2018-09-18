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

// Event 4: load ***********
const contactLink = document.querySelector('.contact-link');
contactLink.addEventListener('load', (event) => {
    // do animation here?
    console.log('your window has loaded!');
});

// Event 5: resize
// can only be called on window
// shouldn't be used for DOM manipulation? so another contrived example
window.addEventListener('resize', (event) => {
    document.querySelector('nav').style.background = 'darkorange';
});

// Event 6: focus
homeLink.addEventListener('focus', (event) => {
    document.querySelector('header img').src = 'https://wallpaperbrowse.com/media/images/POTD_chick_3597497k.jpg'
});

// Event 7: blur
homeLink.addEventListener('blur', (event) => {

});

