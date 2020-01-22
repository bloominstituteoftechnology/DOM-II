// Your code goes here
// Your code goes here
const busImage = document.querySelector('.intro img');
busImage.addEventListener('dblclick',(event)=>{
  busImage.style.filter = "invert(1)";
  busImage.style.transition = "all 1.5s";
  event.stopPropagation();
})
window.addEventListener('resize',()=>{
  busImage.style.filter = "invert(0)";
  busImage.style.transition = "all 1.5s";
})

const body = document.querySelector('body');
body.addEventListener('dblclick', (event)=>{
  body.style.filter = 'invert(1)';
  body.style.color = "pink";
  body.style.transition = 'all 2.5s';
  event.stopPropagation();
})
const navItems = document.querySelectorAll(".nav-link");
const navItemEventHandler = (event) =>{
event.target.style.color = "#3366ff";
}

navItems.forEach(item =>{item.addEventListener("mouseover",navItemEventHandler)});

const navItemDenied = (event) =>{
  event.preventDefault();
}
navItems.forEach(item=>{item.addEventListener('click',navItemDenied)});

let firstPstring = document.querySelector('.intro p');
firstPstring.addEventListener('click',()=>{
  firstPstring.style.textTransform = "uppercase";
  firstPstring.textContent = "oh noes you broke it"
  //firstPstring.style.backgroundColor = "red";
  })
//console.log(typeof firstPstring.textContent);

let secondSec = document.querySelector('.content-section .text-content');
secondSec.addEventListener('click',()=>{
  secondSec.textContent = "just staaaaahppp.";
  secondSec.style.textTransform = "uppercase";
})

let secondImg = document.querySelector('.content-section .img-content img');
secondImg.addEventListener('mouseleave',()=>{
      //gsap.set(secondImg,{transformOrigin:"50% 50%"});
      //gsap.to(secondImg,{duration:2,rotation:360});
      gsap.to(secondImg, { duration: 2.5, ease: "bounce.out", x: 500 });
});
let logoGet = document.querySelector('.main-navigation .logo-heading');
logoGet.addEventListener('mouseenter',()=>{
  gsap.to(logoGet, { duration: 5, ease: "bounce.out", y: -500 });
  logoGet.textContent = "NOPE";
  //console.log("loaded");
});

let footGet = document.querySelector('.footer');

footGet.addEventListener('wheel',()=>{
  gsap.from(footGet,{ duration: 5.5, ease: "elastic.out(1, 0.3)", y: -500 });

})

footGet.addEventListener('click',()=>{
  footGet.style.backgroundColor = 'white';
})
