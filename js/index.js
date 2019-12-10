// Your code goes here

const busImage = document.querySelector(".intro img")
busImage.addEventListener("mouseenter",() =>{
  busImage.style.transform = "scale(1.2)";
  busImage.style.transition = "all 0,30s";
});
const busImg = document.querySelector(".intro img") 
busImage.addEventListener('mouseleave', () => {
  busImg.style.transform = "scale(0.9)";
  busImg.style.transition = "all 0.3s";
});

document.querySelectorAll('h2').forEach(el => {
    el.addEventListener('click',function(){
        el.style.color = "red";
    })
})

const destinationImg = document.querySelector(".content-destination img")
destinationImg.addEventListener("mouseenter",() =>{
    destinationImg.style.transform = "scale(1.2)";
    destinationImg.transition = "all 0,30s";
});
const destination = document.querySelector(".content-destination img") 
destination.addEventListener('mouseleave', () => {
    destination.style.transform = "scale(0.9)";
    destination.style.transition = "all 0.3s";
});

let nav = document.querySelector(".nav");
nav.addEventListener("mouseenter", function( event ) {   
  event.target.style.color = "purple";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
nav.addEventListener("mouseover", function( event ) {   
  event.target.style.color = '#d2f05b';
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const el = document.querySelector('div');
  el.onwheel = zoom;