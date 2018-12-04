const aTags = document.querySelectorAll('.nav-link');
const logoHead = document.querySelector('.logo-heading');
const busImg = document.querySelector('.home .intro img');
const imgFluid = document.querySelector('.rounded');

// ====================== aTags mouseover/mouseout color ===================

for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener('mouseover', function(e) {
        e.target.style.color = 'red';
    });
    aTags[i].addEventListener('mouseout', function(e) {
        e.target.style.color = 'green';
    });
}

// ======================== bus image cursor none  ================================

busImg.addEventListener('mouseenter', function(e) {
    e.target.style.cursor = 'none';
});

// ======================== logo click border ======================================

logoHead.addEventListener('click', function(e) {
    e.target.style.border = '2px dashed red';
});

logoHead.addEventListener('dblclick', function(e) {
    e.target.style.border = 'none';
})

// ======================== images display none =====================================

imgFluid.addEventListener('click', function(e) {
    e.target.style.float = 'right';
});

// allImg.addEventListener('mouseout', function(e) {
//     allImg.classList.toggle('display-none');
// })