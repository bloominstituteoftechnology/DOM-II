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

//Nav items random colors

const navItems = document.querySelectorAll('a');
navItems.forEach(item => {
  item.addEventListener('mousemove', _ => {
    item.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  });

  item.addEventListener('click', e => {
    e.preventDefault();
  });
});