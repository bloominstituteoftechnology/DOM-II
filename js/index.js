// Your code goes here
const bus = document.querySelector('.img-content');

bus.addEventListener("mouseenter" , function(){

bus.style.transform = "scale(1.6)";
bus.style.transition = "transform 2s";

})

bus.addEventListener('mouseleave', function() {
    bus.style.transform = "scale(1)";
})