import './less/index.less'

// Your code goes here!

//mouseover

const welcome = document.querySelector(".intro h2");
welcome.addEventListener("mouseover", (e) => (e.target.style.fontSize = "5em"));
welcome.addEventListener(
   "mouseout",
   (e) => (e.target.style.fontSize = "3.2em")
);


// double click to copy

document.querySelectorAll("p").forEach((i) =>
   i.addEventListener("dblclick", (e) => {
      document.execCommand("copy");
      alert("you copied the word: " + document.getSelection().toString());
   })
);

//wheel

const imgs = document.querySelectorAll("img");
let imgsangles = Array.from(imgs, (i) => 0);
imgs.forEach((i, j) =>
   i.addEventListener(
      "mouseover",
      (e) => (e.target.style.transform = `rotate(${imgsangles[j]}deg)`)
   )
);

imgs.forEach((i) =>
   i.addEventListener("mouseover", (e) => e.target.classList.add("mousedover"))
);
imgs.forEach((i) =>
   i.addEventListener("mouseout", (e) => {
      e.target.classList.remove("mousedover");
      document.querySelector("body").style.overflow = "";
   })
);

imgs.forEach((i, j) =>
   i.addEventListener("wheel", (e) => {
      document.querySelector("body").style.overflow = "hidden";

      if (e.target.classList.contains("mousedover")) {
         // console.log(e);
         e.target.style.transform = `rotate(${(imgsangles[j] +=
            e.deltaY * -0.08)}deg)`;
      }
   })
);

//keydown Can press enter or escape to reset images back to normal

function home(e) {
    if (e.code === "Escape" || e.code === "Enter") {
       imgsangles = Array.from(imgs, (i) => 0);
       imgs.forEach((i) => (i.style.transform = ""));
    }
 }
 
 document.addEventListener("keydown", home);


 //load

 imgs.forEach((i) =>
   i.addEventListener("load", (e) => {
      // console.log(e.currentTarget);
      e.currentTarget.style.opacity = "0.05";
      e.currentTarget.style.transition = "all 0.5s";
      setTimeout(function () {
         i.style.opacity = "1";
      }, 350);
   })
);

//contextmenu 

imgs.forEach((i) =>
   i.addEventListener("contextmenu", (e) => e.preventDefault())
);

//scroll

window.addEventListener('scroll', () => {
    console.log('Scrolled!');
});
  
  
  //resize

  window.addEventListener('resize', function(event){
      console.log('resized')
  }, true);
  
// click


  const buttons = document.querySelectorAll('.btn');
  buttons[0].addEventListener('click', event => {
    event.preventDefault();
    event.target.style.color = 'black';
    console.log('button works');
  });

  //mouseover
  const funBus = document.querySelector('h1');
  funBus.addEventListener('mouseover', event => {
    event.target.style.color = 'yellow';
    event.target.style.fontSize = '8rem';
  });

  //preventDefault

  
  const navLinks = document.querySelectorAll('.nav-link');
navLinks[0].addEventListener('click', event => {
  event.preventDefault();
});