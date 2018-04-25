// navigation
let navLink = document.querySelectorAll('nav a');

// main section
let mainContent = document.querySelectorAll('.main-content');
let services = document.querySelectorAll('.services');
let product = document.querySelectorAll('.product');
let vision = document.querySelectorAll('.vision');
let features = document.querySelectorAll('.features');
let about = document.querySelectorAll('.about');
let contact = document.querySelectorAll('.contact');
let reset = document.querySelectorAll('.reset');

const resetBackground = function () {
  // // reset nav links
  // navLink.forEach(el => {
  //   el.style.backgroundColor = 'initial';
  // })
  // // reset text content
  // textContent.forEach(el => {
  //   el.style.backgroundColor = 'initial';
  // })
  // // reset contact
  // contact.forEach(el => {
  //   el.style.backgroundColor = 'initial';
  // })
  reset.forEach(el => {
    el.style.backgroundColor = 'initial';
  })
};

const changeBackground = function (mainContent) {
  resetBackground();
  mainContent.forEach(el => {
    el.style.backgroundColor = 'yellow';
  })
};

// const changeBackground = function (section) {
//   console.log(section);

//   section.forEach(el => {
//     el.style.backgroundColor = 'yellow';
//   })
// };

//navLink.addEventListener('click', resetBackground);

navLink[0].addEventListener('click', changeBackground.bind(this, services));
navLink[1].addEventListener('click', changeBackground.bind(this, product));
navLink[2].addEventListener('click', changeBackground.bind(this, vision));
navLink[3].addEventListener('click', changeBackground.bind(this, features));
navLink[4].addEventListener('click', changeBackground.bind(this, about));
navLink[5].addEventListener('click', changeBackground.bind(this, contact));









