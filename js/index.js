// Your code goes here
// 1
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', event => {
    logoHeading.classList.toggle('toggle-style');
    // debugger
})
logoHeading.addEventListener('mouseleave', event => {
    logoHeading.classList.toggle('toggle-style');
})

// 2
const nav = document.querySelector('.nav');
document.addEventListener('keydown', event => {
    nav.classList.toggle('toggle-style')
})

// 3
const img = document.querySelector('img');
document.addEventListener('wheel', event => {  
    img.classList.toggle('toggle-radius');
})

