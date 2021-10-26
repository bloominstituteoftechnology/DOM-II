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
        evt.preventDefault();// preventing the nav from refreshing the page
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
 });

 //Event 6
 const img = document.querySelector('.img-content');
 img.addEventListener('click', function(evt) {
     evt.target.style.borderRadius = "999px";
 });

 //Event 7
const bottomImg = document.querySelector('.content-destination img');
bottomImg.addEventListener('mouseover', function(event){
    event.target.style.border = '1px solid black'
});

//Event 8
window.addEventListener('resize', function() {
    console.log('screen resized');
});

// Event 9
const head = document.querySelector('.main-navigation');
head.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        event.target.style.color = '#fff';
    }
});

//Event 10
document.addEventListener('click', function() {
    console.log('Your clicking me');
});



const button = document.querySelector('.btn');
button.addEventListener('click', function(evt) {
    evt.stopPropagation();
    // console.log('stop');
})
