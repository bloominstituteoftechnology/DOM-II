// Your code goes here
// 1
const navCol=document.querySelector('nav');
navCol.addEventListener('mouseover',(e)=>{e.target.style.color='red';});
// 2
navCol.addEventListener('mouseout',(e)=>{e.target.style.color='black';});
// 3
const head=document.querySelector('.logo-heading');
head.addEventListener('dblclick',(e)=>{e.target.style.color='blue';
});
// 4
const key=document.querySelector('body');
key.addEventListener('keydown', (e)=>{e.target.style.backgroundColor='skyblue';
e.target.style.color='white';});
// 5
key.addEventListener('keyup', (e)=>{e.target.style.backgroundColor='white';
e.target.style.color='black';});
// 6
const opac= document.querySelector('img');
opac.addEventListener('mouseover',(e)=>{e.target.style.opacity='0.5';});

// const wheel=document.querySelector('img')[2];
// wheel.addEventListener('wheel', (e)=>{
//     scale += event.deltaY * -0.01;
//   scale = Math.min(Math.max(.125, scale), 4);
// e.style.transform = `scale(${scale})`;});