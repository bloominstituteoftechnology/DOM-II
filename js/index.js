// Your code goes here
const busImage = document.querySelector(".intro img");

busImage.addEventListener("mouseenter", () => {
  busImage.style.transform = "scale(4.0)";
  busImage.style.transition = "transform 10s";

});

busImage.addEventListener("mouseleave", () => {
  busImage.style.transform = "scale(1)";
  busImage.style.transition = "transform 10s";
});

const navClrClk = document.querySelector("nav");
navClrClk.addEventListener("click", event => {
  navClrClk.style.backgroundColor = "blue";
  
});


const  headerClrClk = document.querySelector("h1");
navClrClk.addEventListener("click", event => {
  navClrClk.style.backgroundColor = "gold";
  event.stopPropagation();
});

const flipH2 = document.querySelector(".intro h2");
flipH2.addEventListener("mouseup", event => {
  flipH2.style.transform = "rotate(10deg)";
});

const flipP = document.querySelector(".intro p");
flipP.addEventListener("mouseout", event => {
  flipP.style.transform = "rotate(-50deg)";
});

const doubleClkflipbtn = document.querySelector(".btn");
doubleClkflipbtn.addEventListener("dblclick", event => {
    doubleClkflipbtn.style.transform = "rotate(-210deg)";
});

const divColorScroll = document.querySelector(".text-content");
window.addEventListener("scroll", () => {
  divColorScroll.style.backgroundColor = "red";
});

const resizeItaly = document.querySelector(".img-fluid-rounded");
window.addEventListener('resize', () => {
  resizeItaly.src ="https://vignette.wikia.nocookie.net/coheed/images/b/b6/Heaven%27s_Fence.jpg/revision/latest?cb=20091212193817"
})



 window.addEventListener('load', () => {
     alert(
         "Poopy masters love bus tours"
     )
 });




//STUFF I TRIED :-(

// not sure why this didnt work 

// const sectionColorScroll = document.querySelector(".destination");
// sectionColorScroll.addEventListener('scroll', event => {
//     sectionColorScroll.style.backgroundColor = 'aqua';
// });

// const zoomItaly = document.querySelector(".img-fluid-rounded");
// zoomItaly.addEventListener("wheel", zoom => {
//   wheel.preventDefault();
//   let scale = 1;
//   scale += wheel.deltaY * -0.01;
//   // Restrict scale
//   scale = Math.min(Math.max(0.125, scale), 4);
//   // Apply scale transform
//   zoomItaly.style.transform = `scale(${scale})`;
// });

// function zoom(wheel) {
//     event.preventDefault();

//     scale += event.deltaY * -0.01;

//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);

//     // Apply scale transform
//     el.style.transform = `scale(${scale})`;
//   }

//   let scale = 1;
//   const el = document.querySelector('div');
//   el.onwheel = zoom;

//   document.querySelectorAll("audio").forEach(el => {
//     el.addEventListener("click", function() {

//     })
