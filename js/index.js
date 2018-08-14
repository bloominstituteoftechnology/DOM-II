// Your code goes here
const navItemsOne = document.querySelector('.nav-link-1');
const navItemsTwo = document.querySelector('.nav-link-2');
const navItemsThree = document.querySelector('.nav-link-3');
const navItemsFour = document.querySelector('.nav-link-4');
const logoHeading = document.querySelector('.logo-heading');
const body = document.querySelector('body');

logoHeading.addEventListener('mousedown', event => {
  event.target.style.color = 'blue';

  logoHeading.addEventListener('mouseover', event => {
    event.target.style.color = 'black';
  });
});

navItemsOne.addEventListener('mouseover', event => {
  event.target.style.fontSize = '32px';

  navItemsOne.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '16px';

    event.stopPropagation();
  });
});

navItemsTwo.addEventListener('click', event => {
  event.target.style.color = 'red';
  event.preventDefault();
});

navItemsThree.addEventListener('dblclick', event => {
  event.target.style.backgroundColor = 'black';
  event.target.style.color = 'white';
});

navItemsFour.addEventListener('mouseover', event => {
  event.target.style.fontSize = '32px';

  navItemsFour.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '16px';
  });
});

body.addEventListener('wheel', event => {
  logoHeading.innerHTML = 'FUN BUS';

  window.addEventListener('contextmenu', event => {
    event.target.classList.toggle('new-body');
  });
  window.addEventListener('load', event => {
    alert('Page loaded');
  });
});
