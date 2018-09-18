// Your code goes here
// `mouseover`
const boldLink = document.querySelectorAll('.nav-link');
boldLink.addEventListener('mouseover', (event) => {
  event.preventDefault();  
  event.target.style.fontFamily = 'Verdana, serif';

  setTimeout(function () {
    event.target.style.fontFamily = "";
  }, 500);
}, false);
// `keydown`
// `wheel`
// `drag / drop`
// `load`
// `focus`
// `resize`
// `scroll`
// `select`
// `dblclick`