// Your code goes here
const roadMap = document.querySelectorAll('.img-content');
roadMap.forEach((element) => {
element.addEventListener("mouseenter" , function(){

    element.style.transform = "scale(1.6)";
    element.style.transition = "transform 2s";

})

element.addEventListener('mouseleave', function() {
    element.style.transform = "scale(1)";
})
})

const intro = document.querySelector(".intro");

document.addEventListener('keydown', function() {


  intro.img.style.transform = "rotate(180deg)";
})


const body = document.querySelector('body');
 body.addEventListener('wheel', function(){

    body.style.transform = "scale(1.6)";
    body.style.transition = "2s";
  //  body.style.transform = "scale(1)";

 })

 
 

/*
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
*/

/*bus.img.addEventListener("keydown", function() {
    bus.img.style.transform = "rotate(180deg)";
    bus.img.style.transform = "transform 3s";
    */