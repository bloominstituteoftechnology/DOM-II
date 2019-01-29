// Your code goes here

const body = document.querySelector('body');
const header = document.querySelector('.nav2');

function rand(input) {
  return Math.floor(Math.random() * (input + 1));
}

// change background to random colour on 'b' key press
document.addEventListener('keydown', (e) => {
  if (e.which === 66) {
    body.style.background = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
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
