const mainNav = document.querySelector('.main-navigation');
const navItems = mainNav.querySelector('.nav');
const navLinks = navItems.querySelectorAll('a');
const title = mainNav.querySelector('h1');
const home = document.querySelector('.home');
navLinks.forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();
  });
});

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

window.addEventListener('load', () => {
  pics[3].classList.add('cntrst');
});

home.addEventListener('select', () => {
  console.log(event.target);
  event.target.style.color = yellow;
});
// const headers = home.querySelectorAll('h2');

// headers.forEach(element => {
//   headers.element.addEventListener('select', () => {
//     headers.element.style['text-decoration'] = 'underline';
//   });
// });
