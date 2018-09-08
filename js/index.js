// Your code goes here

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link)=>{
  link.addEventListener('mouseover', ()=>{
    link.style.color = 'blue';
  });

  link.addEventListener('click', (e)=>{
    e.stopPropagation();
    e.preventDefault();
    console.log("Link was clicked and prevented event propagation.");
  });
});

let colors = ['white', 'red', 'green', 'blue'];
const body = document.querySelector('body');
let i = 0;
body.addEventListener('keydown', ()=>{
  (i > 2) ? i = 0 : i++;
  body.style.backgroundColor = colors[i];
});

let j = 0;
body.addEventListener('wheel', ()=>{
  (j > 2) ? j = 0 : j++;
  body.style.color = colors[j];
});

let rotate = 0;
const headImg = document.querySelector('#header-img');
headImg.addEventListener('drag', ()=>{
  rotate++;
  headImg.style.transform = `rotate(${rotate}deg)`;
});

headImg.addEventListener('drop', ()=>{
  console.log(rotate);
  headImg.style.transform = `rotate(-${rotate}deg)`;
});

window.addEventListener('load', (e)=>{
  console.log('Window loaded in ' + (e.timeStamp / 1000) + ' seconds.');
});


const btn = document.querySelector('.btn');
btn.addEventListener('focus', ()=>{
  btn.style.transform = 'scale(2)';
});

window.addEventListener('resize', (e)=>{
  console.log(e);
  alert("Window was resized!!!");
});

scale = 1;
const destImg = document.querySelector('#dest-img');
window.addEventListener('scroll', ()=>{
  scale += 0.005;
  destImg.style.transform = `scale(${scale})`;
});

destImg.addEventListener('click', ()=>{
  scale = 1;
  destImg.style.transform = `scale(${scale})`;
});

destImg.addEventListener('dblclick', ()=> {
  destImg.style.transform = 'rotate(180deg)';
});

const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('click', ()=>{
  console.log("This click event should not be propagated.");
});
