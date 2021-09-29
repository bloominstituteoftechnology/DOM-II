const funBusColor = document.querySelector("h1.logo-heading");
funBusColor.addEventListener("mouseover", function(event) {
    event.target.style.color = "red";
});
funBusColor.addEventListener('mouseout', function(event) {
    event.target.style.color = 'yellow';
});
const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', (event) => {
    event.target.style.color = "red";
    event.target.style.backgroundColor = "yellow";
});
const keyUp = document.querySelector('body');
keyUp.addEventListener('keyup', (event) => {
    event.target.style.color = "yellow";
    event.target.style.backgroundColor = "red";
});
const funButton = document.querySelectorAll('.btn');
funButton[0].addEventListener('click', () => {
    funButton[0].textContent = `Don't do it! It's a trap!`;
  });
funButton[1].addEventListener('click', () => {
    funButton[1].textContent = `Jesus Is a Biscuit!`;
  });
funButton[2].addEventListener('click', () => {
    funButton[2].textContent = `Let Him Sop You Up!`;
  });
  
window.addEventListener('load', () => {
      console.log('STOP LOOKING AT ME!');
  });
const funBusRollOver = document.querySelector('.intro img');
funBusRollOver.addEventListener("mouseover", function(event) {
  event = 'img\series_4.jpg';
});
funBusRollOver.addEventListener('mouseout', function(event) {
  event = 'img\fun-bus.jpg';
});