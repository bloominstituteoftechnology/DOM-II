// Your code goes here


// Header

const logo = document.querySelector('h1');
logo.addEventListener('mouseover', function(event){
    event.target.style.color = "orange"
})

const logoTwo = document.querySelector('h1');
logoTwo.addEventListener('click', function(event){
    event.target.style.color = "black"
})

// const navLinks = document.querySelector('a');
// navLinks.addEventListener('mouseover', function(event){
//     event.target.style.text-decoration = "bold"
// })

const navLinks = document.querySelector('nav');
navLinks.addEventListener('click', function(event){
    event.target.style.fontWeight = "900"
})

const navLinksT = document.querySelector('nav');
navLinksT.addEventListener('dblclick', function(event){
    event.target.style.fontWeight = "100"
})

