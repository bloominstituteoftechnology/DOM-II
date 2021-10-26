//* 1. Load
window.addEventListener('load', () => {
    console.log('Congrats, the page has loaded!')
});

//* 2. Click
const buttonClick = document.querySelectorAll('.btn');
buttonClick[0].addEventListener('click', e => {
    buttonClick[0].textContent = `Hey, don't click that! ${e.detail}`
});

//* 3. MouseOver
const mouseOver = document.querySelector('.logo-heading');
mouseOver.addEventListener('mouseover', e => {
    e.target.style.color = 'purple';
    setTimeout(function () {
        e.target.style.color = '';
    }, 1000);
});
