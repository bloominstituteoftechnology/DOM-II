// const { render } = require("less");

var navLinks = document.querySelectorAll(".nav-link" )


//   console.log(navLinks)


 navLinks.forEach(function(element){
   element.addEventListener("click", function (event) {
        event.target.style.fontSize = "3rem"
        // console.log("its working")

    });
 });


 const headers = document.querySelectorAll("h2")
 headers.forEach(function(element){
    element.addEventListener("click", function (event) {
         event.target.style.fontSize = "4rem"
 
     });
  });
  window.addEventListener('scroll',(event) => {
    console.log('Scrolling...');
});
const div = document.querySelector(".text-content")
 const para = document.querySelector("p")
 function reportWindowSize() {
    div.textContent = window.innerHeight;
    para.textContent = window.innerWidth;
    console.log("its working")
   }
  
   window.onresize = reportWindowSize;
 window.addEventListener('resize', reportWindowSize);

 function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);

 const paragraph = document.querySelectorAll("p")
  document.addEventListener('keydown', logKey);

function logKey(e) {
  paragraph.textContent += ` ${e.code}`;
  console.log("it works")
}

const headings = document.querySelectorAll("h4")
 headings.addEventListener("mouseenter", function(event){
     event.target.style.color = "blue"
     setTimeout(function(){
         event.target.style.color ="";
     },600)
 }, false)
 headings.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
     setTimeout(function() {
         event.target.style.color="";
     },600)
 },false)

const divs =document.querySelectorAll(".btn")

 divs.addEventListener("dblclick",function (e){
   divs.classList.toggle("large")
 });
