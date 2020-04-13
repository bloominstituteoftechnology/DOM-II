// Your code goes here
const roadMap = document.querySelector('.img-content');

roadMap.addEventListener("mouseenter" , function(){

roadMap.style.transform = "scale(1.6)";
roadMap.style.transition = "transform 2s";

})

roadMap.addEventListener('mouseleave', function() {
    roadMap.style.transform = "scale(1)";
})
