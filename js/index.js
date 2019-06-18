// Your code goes here
/*
const logoHeading = document.querySelector('logo-heading');
logoHeading.addEventListener('mouseover', function (e) {
    //code below says if you click button the button will bounce to a larger size in 2sec
TweenMax.to('#logo-heading', 2, { scale: 1.5, ease: Bounce.easeOut });
});
*/
//nav a
const nav = document.querySelectorAll('nav a');
//adds event listener to 0th index of nav with 'click' object
nav[0].addEventListener('click', function (e) {
    //'Home' turns cyan when clicked
    e.target.style.color = 'cyan';
    //clicking on 'Home' only affects 'Home'
    e.stopPropagation();
});

nav[1].addEventListener('click', function (e) {
    e.target.style.color = 'teal';
    e.stopPropagation();
});

nav[2].addEventListener('click', function (e) {
    e.target.style.color = 'cyan';
    e.stopPropagation();
});

nav[3].addEventListener('click', function (e) {
    e.target.style.color = 'teal';
    e.stopPropagation();
});