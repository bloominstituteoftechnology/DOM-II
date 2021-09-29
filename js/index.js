// Your code goes here

//mouse enter
const mouseOverHeading = document.querySelector('header h2');
mouseOverHeading.addEventListener('mouseenter', function(event){
    event.target.style.color = 'purple';
})

//keydown
const boddy = document.querySelectorAll('body');
boddy[0].addEventListener("keydown", function(){
    boddy[0].style.color = "darkgray";
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

//mouse over
const mouseOvering = document.querySelector('header p');
mouseOvering.addEventListener('mouseover', function(){
    mouseOvering.innerText = 'mouseover works!';
    mouseOvering.style.backgroundColor = 'orange';
},true);

//mouse leave
const mouseLeaving = document.querySelectorAll('.text-content p');
mouseLeaving[0].addEventListener('mouseleave', function(){
    mouseLeaving[0].innerText = 'mouseleave works!';
    mouseLeaving[0].style.backgroundColor = 'green';
},true);

//