// Your code goes here
const destBtn = document.querySelector('.destination .btn');

destBtn.addEventListener('click', (event) => {
    destBtn.style.animation = 'innout 1s ease-in-out 0s 1 alternate';
});

const navLinks = document.querySelector('a');

navLinks.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
});

const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('dblclick', (event) => {
    event.target.style.fontFamily = 'Arial';
});


//scrolling event?
document.addEventListener("scroll", function() {


  
  })


