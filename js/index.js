// Your code goes here

// *******  navbar using  mousemove & mouseleave
var nav_a = document.querySelectorAll('a');

nav_a.forEach(function(element){
  element.addEventListener('mousemove', function (event) {
    let tag = event.target.style;
    tag.fontSize = '2rem';
    tag.backgroundColor = 'bisque';
    tag.padding= '2rem';
    tag.borderRadius = '5rem 0 5rem 0';
    tag.border = '1px solid chocolate';

  });
});

nav_a.forEach(function(element){
  element.addEventListener('mouseleave', function (event) {
    let tag = event.target.style;
    tag.fontSize = '1.6rem';
    tag.backgroundColor = 'white';
    tag.padding = '0';
    tag.border = '0';
  });
});

// *******  alert with name of key pressed message
document.addEventListener('keypress', event => {
  const keyPressed = event.key;
  alert(`someone pressed the ${keyPressed} key`);
});

