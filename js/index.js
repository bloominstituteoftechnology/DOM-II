// Your code goes here

//mouse over
const mouseOverHeading = document.querySelector('header h2');
mouseOverHeading.addEventListener('mouseenter', function(event){
    event.target.style.color = 'purple';
})

//keydown
const boddy = document.querySelectorAll('body');
boddy[0].addEventListener("keydown", function(){
    boddy[0].style.color = "darkgray";
    console.log("your keydown works!")
})

//wheel
const imgWheel = document.querySelector('.content-section img')
function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.400, scale), 2.0);
    imgWheel.style.transform = `scale(${scale})`;    
}
let scale = 1;
imgWheel.onwheel = zoom;

//mouse leave
const ml = document.querySelectorAll('.content-section p');
ml.addEventListener('mouseleave', event2 => {
    event2.style.color = 'red';
})