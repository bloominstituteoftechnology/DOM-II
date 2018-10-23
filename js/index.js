// Your code goes here
let myBody = document.querySelector('body');
myBody.addEventListener('keypress', function(){
  alert('This is MY TEXT, you cant type here');
});
myBody.addEventListener('wheel', function(){
  event.target.style.backgroundColor = 'aqua';
  event.target.style.color = 'darkred';
});
myBody.addEventListener('copy', function(){
  alert('No stealing!');
});
// myBody.addEventListener()

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
    event.target.style.color = 'orange';
    event.target.style.fontSize = '4rem';
  });
});

let contentP = document.querySelectorAll("p");
//may be bringing an array so gotta iterate through array
contentP.forEach((element) =>{
  element.addEventListener('dblclick', function(){
    alert('OW stop clicking me!');
  })
});

let myButtons = document.querySelectorAll('.btn');
myButtons[0].addEventListener('mousedown', function(){
  event.target.style.backgroundColor = 'yellow';
  event.target.style.color = 'black';
});
myButtons[0].addEventListener('mouseup', function(){
  event.target.style.backgroundColor = '#17A2B8';
  event.target.style.color = '#FFFFFF';
});
myButtons[1].addEventListener('mousedown', function(){
  event.target.style.backgroundColor = 'yellow';
  event.target.style.color = 'black';
});
myButtons[1].addEventListener('mouseup', function(){
  event.target.style.backgroundColor = '#17A2B8';
  event.target.style.color = '#FFFFFF';
});
myButtons[2].addEventListener('mousedown', function(){
  event.target.style.backgroundColor = 'yellow';
  event.target.style.color = 'black';
});
myButtons[2].addEventListener('mouseup', function(){
  event.target.style.backgroundColor = '#17A2B8';
  event.target.style.color = '#FFFFFF';
});
