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