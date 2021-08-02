// mouseenter and mouseleave event on the main picture
const introContainer = document.querySelector('.intro');
const busImg = document.querySelector('.intro img');

busImg.addEventListener('mouseenter', event => {
    introContainer.style.overflow = 'hidden';
    busImg.style.transition = 'transform';
    busImg.style.transform = 'scale(1.5)';
});
busImg.addEventListener('mouseleave', event => {
    busImg.style.transition = 'transform';
    busImg.style.transform = 'scale(1)';
});

// dblclick event on the 3 buttons at bottom of page
// mouseleave event to revert to original button text
const signMeUpBtns = document.querySelectorAll('.btn');

signMeUpBtns[0].addEventListener('dblclick', event => {
    signMeUpBtns[0].textContent = 'One Click Please';
});
signMeUpBtns[1].addEventListener('dblclick', event => {
    signMeUpBtns[1].textContent = 'One Click Please';
});
signMeUpBtns[2].addEventListener('dblclick', event => {
    signMeUpBtns[2].textContent = 'One Click Please';
});
signMeUpBtns[0].addEventListener('mouseleave', event => {
    signMeUpBtns[0].textContent = 'Sign Me Up!';
});
signMeUpBtns[1].addEventListener('mouseleave', event => {
    signMeUpBtns[1].textContent = 'Sign Me Up!';
});
signMeUpBtns[2].addEventListener('mouseleave', event => {
    signMeUpBtns[2].textContent = 'Sign Me Up!';
});



// const linksAndHeaders = document.getElementsByTagName('a h1 h2 h4');
// linksAndHeaders.addEventListener('keydown', event => {
//     const colors = ['red', 'blue', 'green', 'black', 'purple'];
//     let randomColors = Math.floor(Math.random() * 5);
//     linksAndHeaders.style.color = 'red'
// })

// const middleTwoImgs = document.querySelectorAll('.img-content img');

// middleTwoImgs.addEventListener('wheel', event => {
//     middleTwoImgs.style.rotate = 
// })