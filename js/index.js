// Your code goes here

//1. Nav changes colors on mouseover

const navchan = document.querySelector('.nav');

navchan.addEventListener("mouseover", function( event ){
    event.target.style.color = "red";

    setTimeout (function(){
        event.target.style.color = "black";
    }, 800)
});

//2. trying to get images to go opaque at mouse over
let imgtrans = document.querySelectorAll(".img-content");

imgtrans.addEventListener("mouseover", function(event){
    element.style.filter  = 'alpha(opacity=90)';


})

//3.  h2 changes color when clicked
const headings = document.querySelector('h2');

headings.addEventListener("mouseover", function( event ){
    event.target.style.color = "blue";

    setTimeout (function(){
        event.target.style.color = "black";
    }, 800)
});
//4.
const busimg = document.querySelector(".intro.img[0]")
busimg.addEventListener("mouseover", function(event){
    Object.style.transform = "translate (0,20)";
})


//5.


//6.


//7.

//8.

//9.

//10. change h2 to pink when clicked
const headingTwo = document.querySelectorAll('h2');
headingTwo.forEach(event => {
    event.addEventListener('click', event => {
      event.style.color = 'red';
    });
  });