// Your code goes here
// `mouseover`
const boldLink = document.querySelector('.logo-heading');
boldLink.addEventListener('mouseover', (event) => {
  //event.preventDefault();  
  event.target.style.fontFamily = 'Verdana, serif';

  setTimeout(function () {
    event.target.style.fontFamily = "";
  }, 500);
}, false);

// `keydown`
const navGone = document.querySelector('a');
navGone.addEventListener('keydown', (event) => {
  if(event.keyCode >= 65 && event.keyCode <= 90){
    event.target.style.display = "none"
  }
});
// `wheel`
// `drag / drop`
// `load`
// `focus`
// `resize`
// `scroll`
// `select`
// `dblclick`

//on click
const midButton = document.querySelectorAll('.btn');
midButton[1].addEventListener('click', (event) => {
  event.target.style.display = 'none'

  setTimeout(function () {
    event.target.style.display = "";
  }, 1000);
})