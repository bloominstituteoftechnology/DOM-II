// Your code goes here
// mouseover
const titleText = document.querySelector('.logo-heading');

  titleText.addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';
  });

// keydown
// const borderFlash = document.querySelectorAll('.text-content h2');

//   borderFlash.addEventListener('keypress', (event) => {
//         event.target.style = 'border: 2px dashed orange';
    
//   });


// drag / drop
// const dragDrop = document.querySelectorAll('.content-pick .btn');

//   dragDrop.addEventListener('dragstart', (event) => {
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
  window.addEventListener('scroll', (event) => {
    console.log('scrolled!');
  });

// select **Not working**
const colorChange = document.querySelectorAll('.main-navigation a');

colorChange.addEventListener('select', (event) => {
    event.target.style.color = 'pink';
}, false);


// // dblclick
const hideImg = document.querySelector('.pic1');

  hideImg.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('hide');
  });
