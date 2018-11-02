// Your code goes here

// [ ] `mouseover`
// [ ] `keydown`
// [ ] `wheel`
// [ ] `drag / drop`
// [ ] `load`
// [ ] `focus`
// [ ] `resize`
// [ ] `scroll`
// [ ] `select`
// [ ] `dblclick`

const myNavLogo = document.querySelector('.logo-heading');
myNavLogo.addEventListener('click', function (event) {
    event.target.classList.toggle('active');
    
})

const myNavLinks = document.querySelector('.nav');
myNavLinks.addEventListener('mouseover', function (event) {
    event.target.classList.toggle('active');
    
})

const welcomeHeader = document.querySelector('.intro h2');
document.addEventListener('keydown', function (event) {
    event.target.classList.toggle('active');
    
})
