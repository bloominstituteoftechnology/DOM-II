import './less/index.less'

// Your code goes here!

// 1.) changes text of "Fun Bus" on hover
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener('mouseover', (event) => {
    event.target.innerHTML = 'Bad Bus';
        setTimeout(function() {
        event.target.innerHTML = 'Fun Bus';
    }, 500);
}, false); 

//2.) changes nav bar to red 
const xc = document.querySelector('nav');
xc.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
})




//logoHeading.addEventListener('blur', (event) => {
 //   event.target.innerHTML = 'xx';
  //});