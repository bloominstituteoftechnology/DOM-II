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
window.addEventListener('load', (event) => {
    // do animation here?
    console.log('your window has loaded!');
});

// Event 5: resize
// can only be called on window
// shouldn't be used for DOM manipulation? so another contrived example
window.addEventListener('resize', (event) => {
    // event.preventDefault();
    document.querySelector('nav').style.background = 'darkorange';
    // event.stopPropagation();
});

// Event 6: focus
const headerImg = document.querySelector('header img');
homeLink.addEventListener('focus', () => {
    headerImg.src = 'https://wallpaperbrowse.com/media/images/POTD_chick_3597497k.jpg';
});

// Event 7: blur
homeLink.addEventListener('blur', () => {
    headerImg.src = 'https://cdn.kuaza.com/wp-content/uploads/2017/08/romantik-kuslar-14-subat-sevgililer-gunu-en-guzel-resimler.jpg';
});

// Event 8: dblclick
headerImg.addEventListener('dblclick', () => {
    headerImg.style.visibility = 'hidden';
});

// Event 9: scroll
window.addEventListener('scroll', () => {
    document.querySelector('.home').style.background = 'red';
});

// Event 10: beforeprint
window.addEventListener('beforeprint', (event) => {
    console.log('print it, man!');
});

// Event 11: stopPropagation to rule them all!
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('mouseover', (event) => {
    event.target.style.border = 'solid';
});

// prevents default behavior of anchor tags
document.querySelectorAll('nav a').addEventListener('click', (event) => {
    event.preventDefault();
});


