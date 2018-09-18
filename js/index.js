const mainNav = document.querySelector('.main-navigation');
const navItems = mainNav.querySelector('.nav');
const title = mainNav.querySelector('h1');
const home = document.querySelector('.home');
document.addEventListener('keydown', () => {
  navItems.classList.toggle('vis');
});
console.log(title.innerText);
title.addEventListener('mouseleave', () => {
  title.style['font-size'] = '12px';
});

document.addEventListener('scroll', () => {
  home.style.background = 'gray';
});

window.addEventListener('resize', () => {
  home.style.color = 'purple';
});

const pics = document.querySelectorAll('img');
pics[0].addEventListener('click', () => {
  pics[0].classList.toggle('invert');
});

pics[1].addEventListener('mouseover', () => {
  pics[1].classList.toggle('sat');
});

pics[2].addEventListener('dblclick', () => {
  pics[2].classList.toggle('cntrst');
});

pics[3].addEventListener('load', () => {
  pics[3].classList.add('cntrst');
});
