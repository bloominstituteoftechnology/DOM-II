// Your code goes here

//dblclick
let funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', (event) => {event.target.style.backgroundColor = "red"});
//mouseover & drag  
let allP = document.querySelectorAll('p');
let firstP = document.querySelector('p');
allP.forEach((ps) => {ps.addEventListener('mouseover',(event)=>{event.target.style.color = 'yellow'})});
allP.forEach((ps) => {ps.addEventListener('mouseout',(event)=>{event.target.style.color = 'black'})});
firstP.addEventListener('drag', (event)=>{firstP.style.backgroundColor = 'grey'});
//preventDefault
let navy = document.querySelector('.nav');
navy.addEventListener('click', (event) => {event.preventDefault()});
//keydown
window.addEventListener('keydown',(event)=>{alert('please dont press any keys!')});
//scroll
let body = document.querySelector('body');
window.addEventListener('scroll',()=>body.style.backgroundColor = 'pink');
//focus
let allAs = document.querySelectorAll('a');
allAs[1].addEventListener('focus', ()=> {body.style.backgroundColor = "blue"});
//resize
window.onresize = () => body.style.backgroundColor = "red";
//wheel
let funbus = document.querySelector('.intro img');
const zoomer = (event)=>{
    event.target.style.maxWidth = "45%"
    event.target.style.borderRadius = '20px'
}
funbus.addEventListener('wheel',zoomer);
//stopProp
const containerHome = document.querySelector('.content-pick');
containerHome.addEventListener('mouseover', (event) => {event.target.style.backgroundColor = 'yellow'});
const containerSec = document.querySelector('.destination');
containerSec.addEventListener('mouseover',(event)=>{
    event.target.style.backgroundColor='purple'
    event.stopPropagation()
});
//load
let button = document.querySelector('.btn');
let XMLHReq = new XMLHttpRequest();
button.addEventListener('click', () =>{
XMLHReq.open('GET',"https://cors-anywhere.herokuapp.com/http://www.Google.com")
XMLHReq.send()});
XMLHReq.addEventListener('load',()=>{body.style.backgroundColor = "green"});
//select
const inputter = document.createElement('input');
inputter.setAttribute('type','text');
inputter.setAttribute ('value','Select Me!') ;
document.body.appendChild(inputter);

let footer = document.querySelector('input');
footer.addEventListener('select',()=>{
   alert(`you've selected the footer`);
});