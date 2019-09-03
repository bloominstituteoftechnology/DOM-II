// Your code goes here

//This makes the "fun bus" logo get GIANT 
const logoScaleUp = document.querySelector('.logo-heading');
    logoScaleUp.addEventListener('mouseenter', e => {
    console.log('mouseover happened');
    logoScaleUp.style.transform = 'scale(25)';
});

const logoScaleDown = document.querySelector('.logo-heading');
    logoScaleDown.addEventListener('mouseleave', e => {
        logoScaleDown.style.transform = 'scale(0.5)';
});

//This displays the window size in the top right
const sizeChange = document.querySelector('.nav-link');
    sizeChange.addEventListener('resize', e => {
        sizeChange.style.size = 2;
    });

