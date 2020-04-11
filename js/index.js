// Your code goes here



/** Navigation */
let navLink = document.querySelectorAll('.nav-link');

navLink.forEach((element) => {
    element.addEventListener('mouseenter', function(){
        element.style.transform = "scale(1.2)";
        element.style.transition = 'transform .5s';
    })
        element.addEventListener('mouseleave', function(){
        element.style.transform = "scale(1)";
    })
})

/** header text slide in */

let intro = document.querySelector('.intro h2');

intro.addEventListener('mouseover', function() {
    intro.style.transform = "rotateX(360deg)";
    intro.style.transition = "transform 1.5s ";
})

intro.addEventListener('mouseleave', function (){
    intro.style.transform = "rotateX(360deg)";
    
})

