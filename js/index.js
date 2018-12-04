const aTags = document.querySelectorAll('.nav a');
const logoHead = document.querySelector('.logo-heading');
const busImg = document.querySelector('.home .intro img');
const imgFluid = document.querySelector('.rounded');
const imgAdv = document.querySelector('.img-content img');
const container = document.querySelector('.container');
const header2 = document.querySelectorAll('.home .text-content h2');
const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

// ====================== aTags mouseover/mouseout background color ===================

for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener('mouseover', function() {
        aTags[i].classList.add('nav-color');
    });
    aTags[i].addEventListener('mouseout', function() {
        aTags[i].classList.remove('nav-color');
    });
}

// ======================== bus image cursor none  ================================

busImg.addEventListener('mouseenter', function(e) {
    e.target.style.cursor = 'none';
});

// ======================== logo click display none ======================================

logoHead.addEventListener('click', function(e) {
    //e.target.style.border = '2px dashed red';
    logoHead.classList.toggle('display-none');
});

container.addEventListener('dblclick', function(e) {
    //e.target.style.border = '2px dashed green';
    logoHead.classList.toggle('display-none');
})

// ======================== images border =====================================

imgFluid.addEventListener('wheel', function(e) {
    e.target.style.border = '3px dashed red';
});

imgAdv.addEventListener('wheel', function(e) {
    e.target.style.border = '3px dashed red';
});

// ======================== h2 color change

for (i = 0; i < header2.length; i++) {
header2[i].addEventListener('mousemove', function(e) {
    e.target.style.color = 'red';
    });
}

// ========================= button click color change =============================

for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        e.target.style.background = 'red';
        e.target.style.color = 'green';
        body.classList.toggle('container-background');
    });
}

// 