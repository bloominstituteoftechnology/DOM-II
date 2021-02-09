// Your code goes here

const funBusHeading = document.querySelector('.logo-heading');
// EVENT TYPE 01: mouseover
funBusHeading.addEventListener('mouseover', () => {
  funBusHeading.style.backgroundColor = 'black';
  funBusHeading.style.color = 'white';
});
// EVENT TYPE 02: mouse out
funBusHeading.addEventListener('mouseout', () => {
  funBusHeading.style.backgroundColor = 'white';
  funBusHeading.style.color = 'black';
});


const links = document.querySelectorAll('a');
// EVENT TYPE 03: dblclick
Array.from(links).forEach((link) => {
  link.addEventListener('dblclick', () => {
    link.style.transform = "rotate(30deg)";
    link.style.transition = "2s";
  });
});

const letsGoBlurb = document.querySelectorAll('.text-content')[0];
// console.log(letsGoBlurb)

// EVENT TYPE 04: keydown
const adventureImage = document.querySelector('.img-content').children[0];
console.log(adventureImage);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){
    adventureImage.style.transform = "scaleX(-1)";//, 1);
  }
});

// EVENT TYPE 05: wheel
const contentDest = document.querySelector('.content-destination');
const boatShorePic = contentDest.querySelector('img');
let boatInvertSentinel = 50;
document.addEventListener('wheel', function(event) {
    if (boatInvertSentinel > 25) {
      boatInvertSentinel -= 1;
      boatShorePic.style.filter = 'invert(100%)';
    } else if (boatInvertSentinel > 0){
      boatInvertSentinel -= 1;
      boatShorePic.style.filter = 'invert(0%)';
    } else {
      boatInvertSentinel = 50;
    }   
});

// EVENT TYPE 06: resize
document.addEventListener('resize', function(event) {
  document.querySelector('.container').style.background = 'pink';
});

// EVENT TYPE 07: load
const footer = document.querySelector("footer");
addEventListener('load', function(event) {
    footer.style.fontFamily = 'Comic Sans MS';
});


// scroll
// select
// drag / drop