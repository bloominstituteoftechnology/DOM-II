// mouse over

const catchMe = document.querySelector('.logo-heading');
catchMe.addEventListener('mouseover', () => {
  console.log(catchMe);
  catchMe.style.opacity = '0';
  catchMe.style.cursor = 'pointer';
});

//mouse out

const found = document.querySelector('.logo-heading');
found.addEventListener('mouseout', () => {
  found.style.opacity = '1';
  catchMe.style.cursor = 'pointer';
});

//scroll

const [red, green, blue] = [98, 87, 81];
const page = document.querySelector('header');

window.addEventListener('scroll', e => {
  const y = 0.1 + (window.scrollY || window.pageYOffset) / 908;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  page.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  page.style.color = '#aaa';
  e.stopPropagation();
});

//click  and stopPropagation()
const dest = document.querySelector('.destination');
dest.addEventListener('click', () => {
  alert('no');
});

const signUp = document.querySelectorAll('.btn');
signUp.forEach(button => {
  button.addEventListener('click', e => {
    alert('Signed Up!');
    e.stopPropagation();
  });
});

//resize

window.addEventListener('resize', e => {
  const changeText = document.querySelector('h2');
  changeText.textContent = 'TOO SMALL!';
});

//wheel

const zoom = document.querySelectorAll('img');
zoom.forEach(img => {
  img.addEventListener(
    'wheel',
    e => {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'all 0.5s';
      e.stopPropagation();
    },
    { passive: true }
  );
});

//create input

const input = document.createElement('INPUT');
input.setAttribute('type', 'text');
input.style.width = '50px';

const newHeader = document.querySelector('nav');

newHeader.prepend(input);

//key pressed

const pressed = document.querySelector('input');
const nav = document.querySelector('.nav-link');
pressed.addEventListener('keypress', e => {
  nav.textContent = 'STOP!';
});

//dblclick

const rotate = document.querySelector('img');
rotate.addEventListener('dblclick', () => {
  rotate.style.transform = 'rotate(180deg)';
});
rotate.addEventListener('click', () => {
  console.log('ddd');
  rotate.style.transform = 'rotate(360deg)';
});

//focus

const focus = document.querySelector('input');
focus.addEventListener('focus', e => {
  nav.textContent = 'Dont type!';
});

//mouse move

focus.addEventListener('focusout', () => {
  nav.textContent = 'thank you';
});

const para = document.querySelector('footer p');
para.addEventListener('click', e => {
  para.style.marginLeft = '50px';
});

//prevent Default

const def = document.getElementsByClassName('nav-link');
def.addEventListener('click', e => {
  e.preventDefault();
});
