// Your code goes here

//mouse enter
const mouseOverHeading = document.querySelector('header h2');
mouseOverHeading.addEventListener('mouseenter', function(){
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
})

//mouse leave
const mouseLeaving = document.querySelectorAll('.text-content p');
mouseLeaving[0].addEventListener('mouseleave', function(){
    mouseLeaving[0].innerText = 'mouseleave works!';
    mouseLeaving[0].style.backgroundColor = 'green';
})

//click
const footerClicking = document.querySelector('footer');
footerClicking.addEventListener('click', () => {
    footerClicking.innerText = 'YOUR CLICKING IS WORKING!';
    footerClicking.style.backgroundColor = 'blue';
})

//focus
//not working???
const textFocus = document.querySelectorAll('.text-content p');
textFocus[2].addEventListener('focus', () =>{
    textFocus[2].innerText = 'focus is working!';
    textFocus[2].style.backgroundColor = 'brown';
})

//double click
const hideImage = document.querySelector('.content-destination img');
const doubleClickButton = document.querySelectorAll('.btn');
doubleClickButton[0].addEventListener('dblclick', () =>{
    hideImage.style.display = 'none';
})

//select
//not working???
const textSelection = document.querySelector('.content-destination p');
textSelection.addEventListener('select', ()=>{
    textSelection.innerText = 'Your selection has been erased!';
    textSelection.style.backgroundColor = 'red';
})
