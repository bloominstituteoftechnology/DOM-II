
const body           = document.querySelector('body');
const logo           = document.querySelector('.logo-heading');
const home           = document.querySelector('.home');
const images         = document.querySelectorAll('img');
const headers        = document.querySelectorAll('h2');
const paragraphs     = document.querySelectorAll('p');
const navLinks       = document.querySelectorAll('a');
const destinations   = document.querySelectorAll('.destination p');
const buttons        = document.querySelectorAll('.btn');

// Event 1: If you press any key, the color of the body toggles from white to a colorToggle
document.addEventListener('keypress', function() {
  body.classList.toggle('colorToggle');
});

// Event 2: If you try to copy something, it disappears
body.addEventListener('copy', function(event) {
  event.target.style.visibility = 'hidden';
});

// Event 3: If you mouse over an image, it gets bigger, if you mouse out it goes back to original size
images.forEach(image => {
  image.addEventListener('mouseenter', function() {
    const str = image.width - 200;
    image.style.width = `${str}px`.toString();
  });
  image.addEventListener('mouseleave', function() {
    const str = image.width + 200;
    image.style.width = `${str}px`.toString();
  });
});

// Event 4: If you drag a header (h2) it changes to red
headers.forEach(header => {
  header.addEventListener('drag', function() {
    header.classList.add('changeColor');
  });
});

// Event 5: If you copy a text from a p paragraph, it changes to red
paragraphs.forEach(p => {  
  p.addEventListener('copy', function(event) {
    // Since the body had a copy event listener too, have to stop bubbling
    event.stopPropagation();
    p.classList.add('changeColor');
  });
});

// Event 6: If you click on a link in the nav bar, it removes all the images
navLinks.forEach(a => {
  a.addEventListener('click', function(event) {
    //Stop the navigation from items from refreshing the page
    event.preventDefault();
    images.forEach(image => image.classList.toggle('remove'));
  });
});

// Event 7: If you double click on logo, it gets bigger
logo.addEventListener('dblclick', function() {
  event.target.style.fontSize = '100px';
});

// Event 8: If the wheel button is used on a paragraph in the destination section, it shrinks
destinations.forEach(destination => {
  destination.addEventListener('wheel', function() {
    destination.style.fontSize = '10px';
  })
});

// Event 9: If any key is down, the logo turns red
document.addEventListener('keydown', function() {
  logo.classList.add('changeColor');
});

// Event 10: If the mouse is over any sign me up button, the button turns red  
buttons.forEach(button => {
  button.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'red';
  });
});