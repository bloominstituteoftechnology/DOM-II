// Your code goes here
// Event 1
const imgChange = document.querySelector('.intro img');
imgChange.addEventListener('mouseover', function(evt) {
    evt.target.style.boxShadow = "10px 15px 2px #DEB887";
});

// Event 2
const navChange = document.querySelectorAll('.nav .nav-link');
 Array.from(navChange).forEach(change =>{
    change.addEventListener('click', function(evt) {
        evt.target.style.color = '#808080';
    });
 });

 //Event 3
window.addEventListener('load', function() {
     console.log('The page has loaded successfully.')
 });

 // Event 4
 const secondImage = document.querySelector('.logo-heading');
 secondImage.addEventListener('dblclick', function(event) {
     event.target.style.fontSize = "6rem";
 });

 //Event 5
 document.body.addEventListener('wheel', function(evt) {
     evt.target.style.backgroundColor = "#DEB887";
 })
