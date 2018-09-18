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

// // wheel
// const myWheel = document.querySelector('.container home');

//   homeTag.addEventListener('wheel', (event) => {
//     event.target.
//   });

// drag / drop
const dragDrop = document.querySelectorAll('.content-pick .btn');

  dragDrop.addEventListener('dragstart', (event) => {
        dragDrop.event.target.style.opacity = '.5';
  });

// load **Not working?**
window.addEventListener('load', (event) => {
    console.log('Fun Bus page is done loading!');
  });


// focus **Not working?**
const logIn = document.querySelector('.main-navigation .login');

  logIn.addEventListener('focus', (event) => {
    event.target.style.background = 'gray';
  }, true);
  logIn.addEventListener('blur', (event) => {
      event.target.style.background = "";
  }, true);


// copy **Not working?**
const copyText = document.querySelector('.intro p');

  copyText.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'You copied some text from the Fun Bus website!');
    event.preventDefault();
  });

// // scroll
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });


// // select
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });


// // dblclick
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });
