// Your code goes here

// 1
const navLinkColorChange = document.querySelectorAll('a');
navLinkColorChange.forEach(element => {
  element.addEventListener('mouseover', e => {
    element.style.color = 'royalblue';
  });
});

// 2
const navLinkColorChangeBack = document.querySelectorAll('a');
navLinkColorChangeBack.forEach(element => {
  element.addEventListener('mouseout', e => {
    element.style.color = 'black';
  });
});

// 3
const body = document.querySelector('body');
body.addEventListener('copy', function(x) {
  alert(`Copied to Clipboard`);
});

// 4
const imgScaleUp = document.querySelectorAll('img');

imgScaleUp.forEach(element => {
  element.addEventListener('click', e => {
    element.style.transform = 'scale(1.3)';
  });
});

// 5
const imgScaleDown = document.querySelectorAll('img');

imgScaleDown.forEach(element => {
  element.addEventListener('dblclick', e => {
    element.style.transform = 'scale(1.0)';
  });
});

// 6
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.text-content');
el.onwheel = zoom;

// 7

window.addEventListener('resize', e => {
  const changeBkgColor = document.querySelector('*');
  changeBkgColor.style.background = 'lightgrey';
});

// 8
document.addEventListener('pointerlockchange', e => {
  console.log('Pointer Lock Changed');
});

// 9
const para = document.querySelector('p');

document.addEventListener('pointerlockerror', e => {
  console.log('Error locking pointer');
});

// 10
const noContext = document.querySelector('img');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});
