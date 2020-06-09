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
// 7
    opac.addEventListener('mouseout',(e)=>{e.target.style.opacity='1.0';})
// 8
const first=document.querySelector('.content-destination')
    first.addEventListener('wheel', (e)=>{
        event.currentTarget.style.border = "5px solid green";
        event.currentTarget.style.padding = "10%";
}); 
// 9
const newBack=document.querySelector('body');
    newBack.addEventListener('click',(e)=>{e.target.style.backgroundColor='blue';});
// 10
window.addEventListener('load',(e)=>{alert('Plz dont refresh me! If you do I wont be me anymore');});
