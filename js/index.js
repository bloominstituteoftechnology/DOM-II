let intro = document.querySelector(".intro h2");
intro.addEventListener("copy", (event) => {
  alert("Intro is copied");
});

const keyDown = document.getElementsByClassName('.text-content');

document.addEventListener('keydown', function(){
    console.log("You pressed me!");
});

  let letsGo = document.querySelector(".img-content img");
  letsGo.addEventListener("dblclick", (event) => {
    event.preventDefault();
    alert("WOOOOOOOOOOOO!!!");
  });
    
  let imgRemove = document.querySelector('.img-content img');
  
    imgRemove.addEventListener('dblclick', event)
  
    imgRemove.addEventListener('dblclick', event => {
       imgRemove.style.display = 'none';
   });
  
  let destination = document.querySelectorAll(".destination h4");
  destination[0].addEventListener("mousemove", (event) => {
    event.target.style.color = "red";
  });
  destination[1].addEventListener("mousemove", (event) => {
    event.target.style.color = "red";
  });
  destination[2].addEventListener("mousemove", (event) => {
    event.target.style.color = "red";
  });
  
  let pickYour = document.querySelector(".content-destination h2");
  pickYour.addEventListener("drag", (event) => {
    alert("Pick your destination is being dragged");
  });
  
  let paragraph = document.querySelector('p')
  paragraph.addEventListener('click', (event) => {
      event.target.style.color = 'green';
  });

window.addEventListener('resize', function(){console.log('resize!')}, true); 

var dragged;
/* events fired on the draggable target */
document.addEventListener("drag", function(event) {console.log('Drag!')}, false);

const foot = document.querySelector('footer');
 foot.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'pink';
})