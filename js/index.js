// Your code goes here
let navLinks = document.querySelectorAll('.main-navigation .nav-container nav .nav-link');

navLinks.forEach(x => x.addEventListener('click', (e) => e.preventDefault()));

let busIMG = document.querySelector('.home .intro img');
busIMG.style.transform = 'translateX(-1000px)';
window.addEventListener('load', e =>{
    busIMG.style.transition = 'all 1s';
    busIMG.style.transform = 'translateX(0)';
})

window.addEventListener('wheel', e =>{
    busIMG.style.transform = 'translateX(1000px)';
})

let allP = document.querySelectorAll('.home p');
allP.forEach(x => x.style.filter = 'blur(2px)');
allP.forEach(x => x.addEventListener('mouseover', e =>{
    e.target.style.filter = 'blur(0)';
    e.target.addEventListener('mouseout', e =>{
        e.target.style.filter = 'blur(2px)';
        e.target.style.transition = 'all 1s';
    })
}))