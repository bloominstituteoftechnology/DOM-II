// Your code goes here
// #1 MouseOver Dynamic Nav Tags
const navLinks = document.querySelectorAll('a');
console.log(navLinks);

navLinks.forEach((navLink)=>{
    navLink.addEventListener('mouseover', ()=>{
        navLink.style.color="blue";
    }
)});
navLinks.forEach((navLink)=>{
    navLink.addEventListener('mouseout', ()=>{
        navLink.style.color="black";
    }
)});

// #2 Wheel Opacity turns up
const bus = document.querySelector('.fun-bus');
bus.addEventListener('wheel', ()=>{bus.style.transform = "rotate(7deg)"});
