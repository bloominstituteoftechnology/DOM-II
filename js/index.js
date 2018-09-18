// Your code goes here
// mouseover
const titleText = document.querySelector('.logo-heading');

  titleText.addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';
  });

// keydown
const borderFlash = document.querySelectorAll('.text-content h2');

  borderFlash.addEventListener('keypress', (event) => {
        event.target.style = 'border: 2px dashed orange';
    
  });

// // wheel
// const myWheel = document.querySelector('.container home');

//   homeTag.addEventListener('wheel', (event) => {
//     event.target.
//   });

// // drag / drop
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });

// // load
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });

// myBtn.addEventListener('click', (event) => {});
// // focus
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });

// myBtn.addEventListener('click', (event) => {});
// // resize
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });

// myBtn.addEventListener('click', (event) => {});
// // scroll
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });

// myBtn.addEventListener('click', (event) => {});
// // select
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });

// myBtn.addEventListener('click', (event) => {});
// // dblclick
// const myParagraph = document.querySelector('.testing');

//   homeTag.addEventListener('click', (event) => {
//     event.preventDefault();
//   });

// myBtn.addEventListener('click', (event) => {});