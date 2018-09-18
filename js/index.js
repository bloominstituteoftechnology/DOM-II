let logoHeading = document.querySelector('.logo-heading');

let navLink = document.querySelectorAll('.nav-link');

let body = document.querySelector('body');
window.addEventListener('resize', (e) => {
  // for (let i = 0; i < navLink.length; i++) {
  //   navLink[i].classList.add('navLink');
  // }
  body.classList.add('navLink');  
})


let headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseover', (e) => {
  headerImg.classList.add('blackAndWhite');
});



// window.addEventListener("load", function(event) {
//   this.alert('Here\'s an annoying pop-up!');
// });