// Your code goes here

const body = document.querySelector('body');
const header = document.querySelector('.nav2');

const sunBtn = document.querySelector('#sun-btn');
const closeBtn = document.querySelector('#close_btn');

const overlay = document.querySelector('.overlay');


function rand(input) {
  return Math.floor(Math.random() * (input + 1));
}

// change background to random colour on 'b' key press
document.addEventListener('keydown', (e) => {
  if (e.which === 66) {
    body.style.background = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
    return null;
  }

  if (e.which === 82) {
    body.style.background = 'red';
    return null;
  }

  if (e.which === 87) {
    body.style.background = '#fff';
    return null;
  }
});

// add drop down menu
document.addEventListener('scroll', (e) => {
  if (window.scrollY > 300) {
    header.style.position = 'fixed';
    header.style.transform = 'translateY(0%)';
    return null;
  }

  if (window.scrollY < 300) {
    header.style.transform = 'translateY(-100%)';
    return null;
  }
});

// add overlay element
sunBtn.addEventListener('click', (e) => {
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});
