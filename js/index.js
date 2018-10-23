// Your code goes here
let myBody = document.querySelector('body');
myBody.addEventListener('keydown', function(){
  alert('This is MY TEXT, you cant type here');
});
myBody.addEventListener('contextmenu', function(){
  prompt('Dont steal my website content');
})
myBody.addEventListener()

let myTitle = document.querySelector('h1')
myTitle.addEventListener('mouseenter', function(){
  event.target.style.color = 'red';
  event.target.style.cursor = 'pointer';
  event.target.textContent = 'Welcome to Fun Bus!!'
});

let myNav = document.querySelectorAll('a');
myNav.forEach((element) =>{
  element.addEventListener('mouseover', function(){
    event.target.style.color = 'magenta';
  });
  element.addEventListener('mouseout', function(){
    event.target.style.color = 'black';
  });
});

let contentHeaders = document.querySelectorAll('h2');
//got to loop through this to make changes since its an aray=like object
contentHeaders.forEach((element)=>{
  element.addEventListener('click', function(){
    event.target.style.color = 'red';
    event.target.style.fontSize = '4rem';
  });
});

let contentP = document.querySelectorAll("p");
//may be bringing an array so gotta iterate through array
contentP.forEach((element) =>{
  element.addEventListener('dblclick', function(){
    alert('OW stop clicking me!');
  })
})

let introImg = document.querySelector('.intro img');
//this works

let contentImg = document.querySelector('.content-section .img-content img');
//this works

let lastImg = document.querySelector('.content-destination img')
//this works

let myButtons = document.querySelectorAll('.btn');
