// Your code goes here
// mouseover
const titleText = document.querySelector('.logo-heading');

  titleText.addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';
  });

//keydown
const navBar = document.querySelector('.main-navigation .nav');
window.addEventListener('keydown', (event) => {
        navBar.style.color = 'magenta';
  });


// drag / drop
// const dragIt = document.querySelector('.content-pick .btn');

//   dragIt.addEventListener('dragstart', (event) => {
//         dragDrop.event.target.style.opacity = '.5';
//   });

// load
window.addEventListener('load', (event) => {
    console.log('Fun Bus page is done loading!');
  });


// focus
const logIn = document.querySelector('.main-navigation .login');

  logIn.addEventListener('focus', (event) => {
    event.target.style.background = 'gray';
    event.target.style.color = 'white';
  }, true);

  //blur
  logIn.addEventListener('blur', (event) => {
      event.target.style.background = "";
  }, true);


// copy
  document.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'You copied some text from the Fun Bus website!');
    event.preventDefault();
  });


// scroll
  window.addEventListener('scroll', () => {
    console.log('scrolled!');
  });

// select **Not working**
// const colorChange = document.querySelector('.main-navigation a');

// colorChange.addEventListener('select', (event) => {
//     event.target.style.color = 'pink';
// }, false);


//click
const myHeading = document.querySelector('.intro p');

myHeading.addEventListener('click', (event) => {
    event.target.style.color = "magenta";
    event.stopPropagation();
});


 

// dblclick
const hideImg = document.querySelector('.intro img');

  hideImg.addEventListener('dblclick', (event) => {
    event.currentTarget.classList.toggle('hide');
  });
