// Your code goes here
let navLinks = document.querySelectorAll('.main-navigation .nav-container nav .nav-link');

navLinks.forEach(x => x.addEventListener('click', (e) => e.preventDefault()))