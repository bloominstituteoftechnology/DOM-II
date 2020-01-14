// Your code goes here
const button1 = document.querySelector('#btn1');
button1.addEventListener('click', function(event){
  event.target.style.color = 'black';
});
//stop propagation()
const button2 = document.querySelector('#btn2');
button2.addEventListener('mouseover', function(event){
  event.target.style.background = 'black';
event.stopPropagation();
});
//click event listener
const divClick = document.querySelector('#divBorder');

divClick.addEventListener('click', function(event){
  event.currentTarget.style.border = '1px solid red';
});
//dblclick event listener
const button3 = document.querySelector('#btn3');
button3.addEventListener('dblclick', function(event){
  event.target.style.borderColor = 'red';
});
//mouseenter event listener
const img1 = document.querySelector('#img1');
img1.addEventListener('mouseenter', function(event){
  event.target.style.border = '2px dashed green';
});
//mouseleave event listener
img1.addEventListener('mouseleave', function(event){
    event.target.style.border = 'none';
  })
//mousedown event listener
const img4 = document.querySelector('#img4');
img4.addEventListener('mousedown', function(event){
  event.target.style.opacity = '0';
});
//mouseup event listener
img4.addEventListener('mouseup', function(event){
  event.target.style.opacity = '1';
});
//copy event listener
const p = document.querySelector('p');

p.addEventListener('copy', function(event){
  alert('Why are you copying my paragraph!?');
});
//contextmenu
const img2 = document.querySelector('#img2');
img2.addEventListener('contextmenu', function(event){
  event.target.style.border = '2px solid yellow';
});
//mouseOut Listener
img2.addEventListener('mouseout', function(event){
  event.target.style.border = 'none';
});

//Stop navigation items
document.querySelectorAll(".nav-link").forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();
    });
    
//load event listener
window.addEventListener("load", function(event) {
    setTimeout(() => (alert("Are you ready? Because this webpage is.."), 0));
})
})
//resize event listener
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = Math.random();
});
//keydown event listener
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
//focus event listeners
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});
