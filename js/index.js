// Your code goes here
const navlink = document.querySelector('.nav-link');
const btnclass = document.querySelector('.btn');
const Destination = document.querySelector('.destination');
const Text = document.querySelector('.text-content')

document.addEventListener('click', function(event) {
    if (event.target === navlink) {
        console.log("Clicked the Nav button!")
    } else {
        console.log("Clicked somewhere else...")
    }
})