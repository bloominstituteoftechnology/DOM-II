// Your code goes here
const roadMap = document.querySelector('.img-content');

roadMap.addEventListener("mouseenter" , function(){

roadMap.style.transform = "scale(1.6)";
roadMap.style.transition = "transform 2s";

})

roadMap.addEventListener('mouseleave', function() {
    roadMap.style.transform = "scale(1)";
})

const bus = document.querySelector('.intro');
bus.addEventListener("keydown", function() {
bus.style.transform = "rotate(180deg)";
//bus.style.transform = "transform 3s";

})


/*bus.img.addEventListener("keydown", function() {
    bus.img.style.transform = "rotate(180deg)";
    bus.img.style.transform = "transform 3s";
    */