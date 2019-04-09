// Your code goes here

//Fun Bus text transformed when scrolling up and down
const titleH1 = document.querySelector('h1');

window.addEventListener('wheel', e => {
  if(e.wheelDelta === -120) {
    titleH1.textContent = 'Weeeeeeeee';
  } else {
    titleH1.textContent = 'Woooooooooo';
  }
});

