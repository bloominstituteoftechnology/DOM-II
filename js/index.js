// Your code goes here
const button1 = document.querySelector('#btn1');
button1.addEventListener('click', function(event){
  event.target.style.color = 'black';
});

const button2 = document.querySelector('#btn2');
button2.addEventListener('mouseover', function(event){
  event.target.style.background = 'black';
});

const button3 = document.querySelector('#btn3');
button3.addEventListener('dblclick', function(event){
  event.target.style.borderColor = 'red';
});