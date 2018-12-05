// Your code goes here
const heading = document.querySelectorAll('h2');
heading.forEach(function(e){
    e.addEventListener('mouseover', function(e){
        e.target.style.color = '#17A2B8'
    })
    e.addEventListener('mouseout', function(e){
        e.target.style.color = ''
    })
});

const navLink = document.querySelectorAll(".nav a");
navLink.forEach(function(e){
    e.addEventListener('click', function(e){
        e.target.style.display = ''
    })
    e.addEventListener('click', function(){setTimeout(function(){
        e.classList.toggle('dim');
    },5000)})
})

const head = document.querySelector('.logo-heading');
const headingZoom = function(e){
    e.target.style.fontSize = '5rem';
}
head.addEventListener('click', headingZoom);