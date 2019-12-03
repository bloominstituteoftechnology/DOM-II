// Your code goes here

//Gasp imports
// import { gsap } from "gsap";
// import {CustomEase} from "..package/CustomEase.js";


const funbus = document.querySelector(`h1`);

funbus.addEventListener(`mouseover`,() => {
funbus.style.transform = "scale(1.2)";
funbus.style.transition = "transform 0.3s"
funbus.style.color = `red`;
// CustomWiggle.create("funWiggle", {wiggles: 10, type: "anticipate"});
// gsap.to(".logo-heading", {duration: 2, rotation: 30, ease: "funWiggle"});

})
funbus.addEventListener("mouseleave", () => {
    funbus.style.transform = "scale(1)"
    funbus.style.color = `purple`
  })

  const navlinks = document.querySelectorAll(`.nav-link`).forEach()

  navlinks.addEventListener(`mouseover`,() => {
    navlinks.style.transform = "scale(1.2)";
    navlinks.style.transition = "transform 0.3s"
    navlinks.style.color = `red`;

  })

