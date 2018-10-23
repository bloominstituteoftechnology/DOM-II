// Your code goes here
const navH1 = document.querySelector('.logo-heading');
const busImg = document.querySelector('.busImg');
let fontSize = 4;

busImg.addEventListener('mouseover', function(){
    this.style.filter = 'hue-rotate(140deg)'
})

navH1.addEventListener('wheel', function(){
    if (event.deltaY > 0 && fontSize >= 1) {
        fontSize--;
      } else {
        fontSize++;
      }
     this.style.fontSize = `${fontSize}rem`;
})
