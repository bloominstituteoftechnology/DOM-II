// Your code goes here
// Your code goes here
// Make Brand H1 Blue - Click - 1
const logo = document.querySelector(".logo-heading");
logo.addEventListener("click",(e) => {
logo.style.color = "blue";
e.preventDefault()
});
// Make Brand Black - Double Click - 2
logo.addEventListener("dblclick", () => {
  logo.style.color = "black";
});
// Creating a "hover" on nav-link(s) - 3
const introImg = document.querySelector(".intro img");
introImg.addEventListener("mouseover", () => {
  introImg.style.transform = "scale(1.5)"
  introImg.style.transition = "all 0.3s"
});
// Reverting image - 4
introImg.addEventListener("mouseout", () => {
  introImg.style.transform = "scale(1)"
});
//changing body color on wheel - 5
const bdy = document.querySelector('body');
bdy.addEventListener("wheel", () => {
  bdy.style.backgroundColor = "silver";
})
// changing body color on button down - 6
bdy.addEventListener("keydown", () => {
  bdy.style.backgroundColor = "orange";
})
// Onload = Body Color = purple - 7
window.onload = () => {
  bdy.style.backgroundColor = "purple";
}
// context-menu => body color green - 8
bdy.addEventListener("contextmenu", ()=> {
  bdy.style.backgroundColor = "green"
});
// mouseenter => Nav Links = brown - 9
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(l => {
  l.addEventListener("mouseover", () => {
    l.style.color = "red";
    setTimeout(() => {
      l.style.color = "gray";
    }, 500);
  });

  //Prevent Default
      //Prevent Default
  l.addEventListener("click", e => {
    e.preventDefault();
  });
})
  });



// Bubbling
const textDiv = document.querySelector('.text-content')
textDiv.addEventListener('click', e => {
  e.target.style.backgroundColor = 'orange'
}, false)
const textP = document.querySelector('.text-content p')
textP.addEventListener("click", e => {
  e.target.style.backgroundColor = "green"
})