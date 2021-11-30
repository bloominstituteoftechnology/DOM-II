import './less/index.less'

const intro = document.querySelector(".intro");
const lego = document.querySelector(".text-content");
const navLinks = document.querySelector(".nav");
const contact = document.querySelector(".nav-link:nth-of-type(4)")
const funBtn = document.querySelector(".btn");
const footer = document.querySelector(".footer");
const busImg = document.querySelector("header.intro")


//1
lego.addEventListener("click", function(evt) {
    console.log('clicky clack');
});

//2
let lastKnownScrollPosition = 0;
let ticking = false;
function hey(scrollPos){
    console.log('hey');
}
lego.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        hey(lastKnownScrollPosition);
        ticking = false;
      });
  
      ticking = true;
    }
  });

//3
document.addEventListener('pointerout', (event) => {
console.log('Pointer moved out');
});

//4
navLinks.addEventListener("click", function(evt) {
alert('teleportation is cool');
});

contact.addEventListener("click", function(evt) {
    alert('forgot my email, try again later');
    });

//5
function logKey(e) {
    console.log(` ${e.code}`);
  }
document.onkeydown = logKey;

//6
funBtn.addEventListener('pointerup', (event) => {
    alert('sign up down, please try again later');
  });

//7
footer.addEventListener('pointerover', (event) => {
    console.log('you know I gotta stay protected in these streets');
  });

//8
document.addEventListener('copy', (event) => {
    alert('Make sure you give me credit ;)')
});

//9
// document.addEventListener('pointerleave', (event) => {
//     alert(`Wait! Don't leave me here alone!`);
//   }); 

//10
function travelSong() {
    alert(`We're going on a trip on my favorite rocket ship!('er, I mean bus)`)
}
busImg.addEventListener('pointerdown', travelSong);
