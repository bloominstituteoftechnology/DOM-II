// Your code goes here

const navBar = document.querySelectorAll('.nav-link');

navBar.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
});
