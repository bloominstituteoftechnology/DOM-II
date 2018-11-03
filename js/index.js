// Your code goes here
window.addEventListener("load", function(event) {
  alert("The page has now loaded");
  });

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

const img1 = document.querySelector('#img1');
img1.addEventListener('mouseenter', function(event){
  event.target.style.border = '2px dashed green';
});

img1.addEventListener('mouseleave', function(event){
  event.target.style.border = 'none';
})

const img4 = document.querySelector('#img4');
img4.addEventListener('mousedown', function(event){
  event.target.style.opacity = '0';
});

img4.addEventListener('mouseup', function(event){
  event.target.style.opacity = '1';
});
