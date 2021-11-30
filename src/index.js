import './less/index.less'

// Your code goes here!

//1 - underline nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link){
    link.addEventListener('mouseover', function() {
        link.style.textDecoration = 'underline';
    })
})
