// Your code goes here
// #1 MouseOver Dynamic Nav Tags
const navLinks = document.querySelectorAll('a');
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
const paras = document.querySelectorAll('section p');
window.addEventListener('keydown', ()=>{
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
const htags = document.querySelectorAll('.container h2')
document.addEventListener('scroll', ()=>{
    htags.forEach((h)=>{
        h.style.fontSize = "5rem";
    })
});
// #5 Form Popup on Sign Me Up Button
const btns = document.querySelectorAll('.btn');
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        prompt("Enter Your Email");
    })
});
//#6 On window Resize Images spin.
const images = document.querySelectorAll('img');
window.addEventListener('resize', ()=>{
    images.forEach((img)=>{
        img.classList.add("rotate-center")
    })
});
// #7 On load main content Animates
const home = document.querySelector('.home');
console.log(home);
window.addEventListener('load', ()=>{
    
    home.classList.add("scaleUp")
} )
const navigation = document.querySelector('.main-navigation');
//#8-9 Hide Nav On Animation and Reveal at End
home.addEventListener('animationstart',  ()=>{
    navigation.style.display="none";
});
home.addEventListener('animationend',  ()=>{
    navigation.style.display="flex";
});

//#10 On Fun Bus Logo DoubleClicks Rave Fun-Bus image
const logoHeading = document.querySelector('.logo-heading');
const body = document.querySelector("body");
console.log(body);
logoHeading.addEventListener('dblclick', ()=>{
    setInterval(
    ()=>{
        bus.classList.add("scale-up-center");
        body.style.background = getRandomColor();
    },1000);
});