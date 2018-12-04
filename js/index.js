const btn = document.querySelectorAll('.btn');

// 1
btn[0].addEventListener('mouseover', _ => {
  btn[0].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});

// 2
btn[1].addEventListener('click', _ => {
  btn[1].textContent = 'You got it chief';
});

// 3
btn[2].addEventListener('mouseout', _ => {
  btn[2].textContent = 'Wait come back';
});

const copyTitle = document.querySelector('h2');

// 4
copyTitle.addEventListener('copy', _ => {
  copyTitle.textContent = 'Hey you copied me >:('
});

const titleH1 = document.querySelector('h1');

// 5
window.addEventListener('wheel', e => {
  if(e.wheelDelta === -120) {
    titleH1.textContent = 'Going down! VVV';
  } else {
    titleH1.textContent = 'Going up! ^^^';
  }
});

const allPs = document.querySelectorAll('p');

// 6
allPs[1].addEventListener('dblclick', e => {
  allPs[1].textContent += ' Alright I can handle one click but not two, cmon man.'
});

// 7
window.addEventListener('resize', _ => {
  allPs[0].textContent = `Woah we are shrinking or getting bigger, it's hard to tell`
});

//8
window.addEventListener('load', e => {
  alert(`Page loaded at time stamp: ${e.timeStamp}`)
});

//9
const navItems = document.querySelectorAll('a');
navItems.forEach(item => {
  item.addEventListener('mousemove', _ => {
    item.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  });

  item.addEventListener('click', e => {
    e.preventDefault();
  });
});

//10
const copyright = document.querySelector('footer p');
window.addEventListener('offline', _ => {
  copyright.textContent = 'Looks like you lost connection to the internet';
});