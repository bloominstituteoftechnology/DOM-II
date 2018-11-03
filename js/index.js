const logo = document.querySelector('.logo-heading');
const nav = document.querySelectorAll('.nav-link');
const header = document.querySelector('.main-navigation');
const img = document.querySelector('.intro img');
const h1 = document.querySelector('.logo-heading');
const container = document.querySelector('.container');
const btn = document.querySelectorAll('.btn');

// Event 1
logo.addEventListener('mouseover', (event) => {
  event.target.style.color = 'dodgerblue';
});

// Event 2
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener('focus', () => {
    nav[i].preventDefault();
    nav[i].classList.toggle('toggle');
  });
}

// Event 3
header.addEventListener('keydown', (event) => {
  function random() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const keyName = event.key;
  if (keyName === 'Enter') {
    event.target.style.color = random();
  }
});

// Event 4
img.addEventListener('mouseenter', () => {
  img.classList.toggle('imgToggle');
});

// Event 5
h1.addEventListener('wheel', (event) => {
  event.target.style.fontSize = '10px';
});

// Event 6
container.addEventListener('load', (event) => {
  event.target.style.color = 'grey';
});

// Event 7
nav.forEach(nav => {
  nav.addEventListener('dblclick', (event) => {
    event.target.style.color = 'red';
  });
});

// Event 8
btn.forEach(b => {
  b.addEventListener('click', (event) => {
    event.target.style.color = 'green';
  });
});

// Event 9
btn.forEach(b => {
  b.addEventListener('focusin', (event) => {
    event.target.style.color = 'magenta';
  });
});

// Event 10
btn.forEach(b => {
  b.addEventListener('focusout', (event) => {
    event.target.style.color = 'white';
  });
});