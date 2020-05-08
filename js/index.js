// Your code goes here

//dblclick
let funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', (event) => {event.target.style.backgroundColor = "red"});
//mouseover 
let firstP = document.querySelector('p');
firstP.addEventListener('mouseover',(event)=>{event.target.style.color = 'yellow'});
firstP.addEventListener('mouseout',(event)=>{event.target.style.color = 'black'});
//drag
let navy = document.querySelector('.nav');
navy.addEventListener('drag',(event)=>{event.target.style.backgroundColor = "black"});
//keydown
window.addEventListener('keydown',(event)=>{alert('please dont press any keys!')});
//select
let firstA = document.querySelector('a');
firstA.addEventListener('select',(event)=>{event.target.style.backgroundColor = "black"});
//scroll
let body = document.querySelector('body');
window.addEventListener('scroll',()=>body.style.backgroundColor = 'pink');
//focus
let secondPic = document.querySelectorAll('a');
secondPic[1].addEventListener('focus', ()=> {body.style.backgroundColor = "blue"});
//resize
let button = document.querySelector('.btn');
window.onresize = () => body.style.backgroundColor = "red";
//wheel
let funbus = document.querySelector('.intro img');
const zoomer = (event)=>{
    event.target.style.maxWidth = "45%"
    event.target.style.borderRadius = '20px'
}
funbus.addEventListener('wheel',zoomer);

//load
let lastPic = document.querySelector('.content-destination img');
lastPic.addEventListener('load',()=>{body.style.backgroundColor = "green"});

