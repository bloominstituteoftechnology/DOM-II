import './less/index.less'

// Your code goes here!
const navLink = document.querySelector('.nav-link')


navLink.addEventListener("onClick", function(event) {
    event.target.style.color = "red"

});