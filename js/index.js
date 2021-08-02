const introContainer = document.querySelector('.intro');
const busImg = document.querySelector('.intro img');
const signMeUpBtns = document.querySelectorAll('.btn');

busImg.addEventListener('mouseenter', event => {
    introContainer.style.overflow = 'hidden';
    busImg.style.transition = 'transform';
    busImg.style.transform = 'scale(1.5)';
})

busImg.addEventListener('mouseleave', event => {
    busImg.style.transition = 'transform';
    busImg.style.transform = 'scale(1)';
})

signMeUpBtns.addEventListener('dblclick', event => {
    signMeUpBtns[0].textContent = 'One Click Please';
    signMeUpBtns[1].textContent = 'One Click Please';
    signMeUpBtns[2].textContent = 'One Click Please';
})

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