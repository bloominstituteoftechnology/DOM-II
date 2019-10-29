// Your code goes here

const welcome = document.querySelector('.intro');
welcome.addEventListener('mouseover', event => event.target.style.color = 'orange');
setTimeout(function() {
    event.target.style.color = "";
  }, 500);
 false;



window.addEventListener('keydown', event => {
    console.log(`Input detected keypress: ${event.key}`);
});

const riverBoat = document.querySelector('.img-fluid rounded');
riverBoat.addEventListener('wheel', zoom);