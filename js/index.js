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

// #2 Wheel - bus Tilts
const bus = document.querySelector('.fun-bus');
bus.addEventListener('wheel', ()=>{bus.style.transform = "rotate(7deg)"});



// // #3 Doublick - colorful words.
window.addEventListener('keydown', ()=>{
    const paras = document.querySelectorAll('section p');
    paras.forEach((p)=>{
      p.style.color=getRandomColor();
    });
  });
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
  }
  
// #4 Enlage Headers on scroll
document.addEventListener('scroll', ()=>{
    const htags = document.querySelectorAll('.container h2')
    htags.forEach((h)=>{
        h.style.fontSize = "5rem";
    })
});