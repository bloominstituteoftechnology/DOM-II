// Your code goes here
/*
* I used:
  * `mouseover`
  * mouseout
  * click
  * key up
  * `keydown`
  * scroll
  * dblclick
  * load
  * copy
  * contextmenu
*/

  // selectors //
let navLinks = document.querySelectorAll('.nav a');
let html = document.querySelector('html');
let h1Text = document.querySelector('h1');
let headerImage = document.querySelector('.intro img')
let h2Content = document.querySelectorAll('h2');
let images = document.querySelectorAll('img');
let bodyImages = [images[1], images[2]];


//when mouseover the nav links, transform larger
navLinks.forEach(link => {
  link.addEventListener('mouseover', event => {
    event.target.style.transform = 'scale(1.2)'
  })
  //on mouseout, reset to normal size
  link.addEventListener('mouseout', event => {
    event.target.style.transform = 'scale(1.0)'
  })
});

// prevent nav links from refreshing page
navLinks.forEach(link => {
  link.addEventListener('click', (event) => event.preventDefault());
});

//when click contact, background turns red
navLinks[3].addEventListener('click', () => {
  event.target.style.background = "#f6bf52";
})

//on keydown, change background color
document.addEventListener('keydown', () => html.style.background = '#f6bf52');
document.addEventListener('keyup', () => html.style.background = 'inherit')

//on scroll, headers turn red

document.addEventListener('scroll', () => {
  h2Content.forEach((item) => item.style.color = "red");
  setTimeout(() => h2Content.forEach((item) => item.style.color = "black"), 500)
});

//header image will toggle between .5 opacity and .1 opacity when double-clicked
headerImage.style.opacity = 1;
headerImage.addEventListener('dblclick', event => {
  if (event.target.style.opacity === '1') {
  event.target.style.opacity = '.5';
  } else {
    event.target.style.opacity = '1';
  }
})

//make the main header flash a couple times when the page loads
window.addEventListener('load', () => {
  setTimeout(() => h1Text.style.color = "red", 250);
})
window.addEventListener('load', () => {
  setTimeout(() => h1Text.style.color = "black", 500);
})
window.addEventListener('load', () => {
  setTimeout(() => h1Text.style.color = "red", 750);
})
window.addEventListener('load', () => {
  setTimeout(() => h1Text.style.color = "black", 1000);
})
window.addEventListener('load', () => {
  setTimeout(() => h1Text.style.color = "red", 1250);
})
window.addEventListener('load', () => {
  setTimeout(() => h1Text.style.color = "black", 1500);
})
window.addEventListener('load', () => {
  setTimeout(() => h1Text.style.color = "red", 1750);
})
window.addEventListener('load', () => {
  setTimeout(() => h1Text.style.color = "black", 2000);
})
//make main header also rotate using gsap
window.addEventListener('load', () => {
  gsap.to(h1Text, {duration: 2, rotation: 360});
});

//if image is copied using ctrl + c, alert that the image are copyrighted
images.forEach(img => {
  img.addEventListener('copy', () => window.alert('These images are copyrighted. Please contact us for permission prior to using.'));
})

//to prevent easy copy of images, disable the right click menu

images.forEach(img => {
  img.addEventListener('contextmenu', (event) => event.preventDefault());
});

//using gsap - for body images, change make them larger on mouseenter and change back to normal on mouseleave

bodyImages.forEach(img => {
  img.addEventListener('mouseover', function() {
    gsap.to(this, {duration: 1, scale: 1.2});
  });
})
bodyImages.forEach(img => {
  img.addEventListener('mouseleave', function() {
    gsap.to(this, {duration: 1, scale: 1.0});
  });
})


//when the person clicks 'contact', open modal with a form.
let modal = document.querySelector('.modal');

let close = document.querySelector('.cancel');

//when contact is clicked, modal display changes to block
navLinks[3].addEventListener('click', () => modal.style.display = 'block');


//when cancel is clicked, modal display changes to none;
close.addEventListener('click', () => modal.style.display = 'none');

//when window outside of modal is clicked, modal closes;
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
//add padding to the form elements;
let formElements = document.querySelectorAll('form div');
formElements.forEach(element => {
  element.style.padding = "2%";
})
//make form elements inline-block;
formElements.forEach(element => {
  element.style.display = "inline-block";
});
//when 'sign me up buttons' are clicked, modal pops up
  //grab buttons
let buttons = document.querySelectorAll('.btn');

  //open modal
buttons.forEach(button => {
  button.addEventListener('click', () => modal.style.display = 'block');
});
//


//the images that were modified with gsap are overriding the nav bar. using z-index to make nav bar always in the front.
let mainNav = document.querySelector('.main-navigation');
mainNav.style.zIndex = "1";