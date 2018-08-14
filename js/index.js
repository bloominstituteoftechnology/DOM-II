// Your code goes here
const logo = document.querySelector('.logo-heading')
const container = document.querySelector('.container');
const background = document.querySelector('body');
const navLinkOne = document.querySelector('.nav-link-1');
const navLinkTwo = document.querySelector('.nav-link-2');
const images = document.querySelectorAll('img');
const paragraphs = document.querySelectorAll('p');
const button = document.querySelectorAll('btn');
const titles = document.querySelector('.h4');
const welcome = document.querySelectorAll('.welcome-head');
const btnOne = document.querySelector('.work');
const selectedT = document.querySelector('.selected');



logo.addEventListener('click', (event)=> {
    alert('So you chose to ride the Fun Bus, eh?');    
  });
navLinkOne.addEventListener('dblclick', (event)=>{
    event.target.style.color = 'red';  
});

container.addEventListener('resize', (event)=>{
    alert('Resized for the greater good!');
});
background.addEventListener('keydown', () => {
    background.style.backgroundColor = "red";
    event.stopPropagation();
});
background.addEventListener('keyup', () => {
    background.style.backgroundColor = "yellow";
    event.stopPropagation();
});

selectedT.addEventListener('wheel', () => {
    alert('Woaaah!')
});

navLinkTwo.addEventListener('mouseover', event => {
    event.target.style.fontSize = '40px';
     navLinkTwo.addEventListener('mouseleave', event => {
      event.target.style.fontSize = '16px';
       event.stopPropagation();
    });
  });
container.addEventListener('load', ()=>{
    console.log('Could you load faster..?')
});
container.addEventListener('scroll', ()=> {
    console.log('This guy scrolls.')
});


