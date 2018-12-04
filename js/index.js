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
// Preventing default of NavLinks
navLinks.forEach((navLink)=>{
    navLink.addEventListener('click', function(event){
        event.preventDefault();
    })
});

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
// #5 Form Popup on Sign Me Up Button
const btns = document.querySelectorAll('.btn');
console.log(btns);
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        prompt("Enter Your Email");
    })
});