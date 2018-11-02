// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const body = document.querySelector('body');
const introP = document.querySelector('.intro p');
const navLink = document.querySelectorAll('.nav-link');
const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');

fName.addEventListener('select', function() {
    alert('you selected some text!');
});

fName.addEventListener('focus', function(event) {
    event.target.style.backgroundColor = 'silver';
});

lName.addEventListener('select', function() {
    alert('you selected some text!');
});

lName.addEventListener('focus', function(event) {
    event.target.style.backgroundColor = 'silver';
});

window.addEventListener('load', function(event) {
    alert("All resources finished loading!");
  });

window.addEventListener('resize', function(event) {
    document.querySelector('.intro p').className = "silverPara";
})  

body.addEventListener('keydown', function() {
    alert('Please select a menu item. Thank you!');
});

logoHeading.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '5rem';
});

logoHeading.addEventListener('mouseleave', function(event) {
    event.target.style.fontSize = '4rem';
});

body.addEventListener('wheel', function(event) {
    event.target.style.color = 'red';
});

body.addEventListener('dblclick', function(event) {
    event.target.style.color = 'black';
});



window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.intro p').className = "greenPara";
    } else {
        document.querySelector('.intro p').className = "";
    }
}