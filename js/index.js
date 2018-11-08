// Your code goes here

// THIS IS `MOUSEOVER` EVENT LISTENER
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => {
  logoHeading.style.color = 'green';
  logoHeading.style.fontSize = '5rem';
  // alert('THIS POPUP SUCKS, also check the Fun Bus H1, it is GREEN in 3... 2... 1... NOW! (close this popup)');
});
// global for `.logo-heading` class
logoHeading.style.border = '2px solid brown';
logoHeading.style.borderRadius = '10px';

// THIS IS THE `KEYDOWN` EVENT LISTENER
window.addEventListener('keydown', () => {
  console.log('Why are you pressing random keys? There are no text fields on this page...');
});

// THIS IS THE `WHEEL` EVENT LISTENER
let wheel = document.querySelector('.content-section');
wheel.addEventListener('wheel', () => {
  wheel.style.fontSize = '3rem';
  wheel.style.color = 'yellow';
  wheel.style.backgroundColor = 'black';
  wheel.style.padding = '20px 10px 20px 10px';
});

// THIS IS THE `DRAG / DROP` EVENT LISTENER
let drag = document.querySelectorAll('img');
drag[0].addEventListener('dragstart', () => {
  alert('How dare you steal my first image!');
})
drag[1].addEventListener('dragstart', () => {
  alert('X marks the spot where you will be caught stealing my pics!');
})
drag[2].addEventListener('dragstart', () => {
  alert('Don\'t make me throw you off this boat...');
})
drag[3].addEventListener('dragstart', () => {
  alert('STOP STEALING MY IMAGES. *splash*');
})

// THIS IS THE `LOAD` EVENT LISTENER
window.addEventListener('load', () => {
  console.log('The page has finished loading all of it\'s resources in approximately: .000001 seconds :-)');
})

// THIS IS THE `RESIZE` EVENT LISTENER
window.addEventListener('resize', () => {
  console.log('Good job, you are either multi tasking or ... closing my page out :-(');
  window.type;
});
// let remove = document.querySelector('.main-navigation');
// remove.addEventListener('resize', () => {
//   remove.style.display = 'none';
// });
// ^^ NOT SURE HOW TO DO THIS

// THIS IS THE `DBCLICK` EVENT LISTENER
window.addEventListener('scroll', () => {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});
