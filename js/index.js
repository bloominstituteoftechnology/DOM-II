// Your code goes here

const body = document.querySelector('body');

function rand(input) {
  return Math.floor(Math.random() * (input + 1));
}

document.addEventListener('keydown', (e) => {
  if (e.which === 66) {
    body.style.background = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
  }
});
