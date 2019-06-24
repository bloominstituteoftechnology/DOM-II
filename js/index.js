// Your code goes here

let mouseOver = document.querySelector('.container nav-container');

mouseOver.addEventListener("mouseover", function(event){
   event.target.style.color = "pink";
   setTimeout(function(){
       event.target.style.color="";
   }, 500 );
}, false);