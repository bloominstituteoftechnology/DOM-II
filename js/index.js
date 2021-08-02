// mouseenter and mouseleave event on the main picture
const introContainer = document.querySelector('.intro');
const mainNavigation = document.querySelector('.main-navigation');
const busImg = document.querySelector('.intro img');
const logoH1 = document.querySelector('.logo-heading');
const welcomeToFunBusH2 = document.querySelector('.intro h2');

busImg.addEventListener('mouseenter', event => {
    busImg.style.border = 'pink dotted 10px';
    logoH1.style.color = 'pink';
    logoH1.style.fontWeight = 'bolder';
    welcomeToFunBusH2.innerHTML = 'Welcome To <span style=color:pink>Fun Bus</span>!';
});
busImg.addEventListener('mouseleave', event => {
    busImg.style.border = '';
    logoH1.style.color = 'black';
    logoH1.style.fontWeight = '';
    welcomeToFunBusH2.textContent = 'Welcome To Fun Bus!'
    event.stopPropagation();
});

// dblclick event on the 3 buttons at bottom of page
// mouseleave event to revert to original button text
const signMeUpBtns = document.querySelectorAll('.btn');
const btnsArray = Array.from(signMeUpBtns); //convert node list to array

btnsArray[0].addEventListener('dblclick', event => {
    btnsArray[0].textContent = 'One Click Please';
});
btnsArray[1].addEventListener('dblclick', event => {
    btnsArray[1].textContent = 'One Click Please';
});
btnsArray[2].addEventListener('dblclick', event => {
    btnsArray[2].textContent = 'One Click Please';
});
btnsArray[0].addEventListener('mouseleave', event => {
    btnsArray[0].textContent = 'Sign Me Up!';
});
btnsArray[1].addEventListener('mouseleave', event => {
    btnsArray[1].textContent = 'Sign Me Up!';
});
btnsArray[2].addEventListener('mouseleave', event => {
    btnsArray[2].textContent = 'Sign Me Up!';
});

// keydown event on the 'd' and 'l' key to toggle dark/light mode
document.addEventListener('keydown', event => {
    if (event.key === 'd') {
        document.body.style = 'color: white; background-color: #111111';
        event.stopPropagation();
    }
    if (event.key === 'l') {
        document.body.style = '';
        event.stopPropagation();
    }
})

// busImg.addEventListener('mouseenter', event => {
//     introContainer.style.overflow = 'hidden';
//     busImg.style.transition = 'transform';
//     busImg.style.transform = 'scale(1.5)';
// });
// busImg.addEventListener('mouseleave', event => {
//     busImg.style.transition = 'transform';
//     busImg.style.transform = 'scale(1)';
// });

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