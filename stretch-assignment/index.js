let red = document.querySelector(".block--red");
let blue = document.querySelector(".block--blue");
let green = document.querySelector(".block--green");
let pink = document.querySelector(".block--pink");
let gray = document.querySelector(".block--gray");
let allBoxes = gray.parentNode;
let topOrder = -1;
function randomColor(){
    let hexdec = "ABCDEF0123456789";
    let color = "#";
  
    while(color.length < 7){
        color += hexdec[Math.floor((Math.random()*16)+1)];
    }
    return color;
  }

allBoxes.addEventListener('click', e => {
  topOrder--;
  if (e.target === red) {
    red.style.order = topOrder;
  }
  if (e.target === blue) {
    blue.style.order = topOrder;
  }
  if (e.target === green) {
    green.style.order = topOrder;
  }
  if (e.target === pink) {
    pink.style.order = topOrder;
  }
  if (e.target === gray) {
    gray.style.order = topOrder;
  }
});

let int;
let theBox;
allBoxes.addEventListener("mousedown", e => {
    let distance = 0;
  const traveler = () => {
      distance++;
    if (e.target === red) {
        theBox = e.target,
      e.target.style.left = `${distance}px`
    }
    if (e.target === blue) {
        theBox = e.target,
        e.target.style.left = `${distance}px`
    }
    if (e.target === green) {
        theBox = e.target,
        e.target.style.left = `${distance}px`
    }
    if (e.target === pink) {
        theBox = e.target,
        e.target.style.left = `${distance}px`
    }
    if (e.target === gray) {
        theBox = e.target,
        e.target.style.left = `${distance}px`
    }
  };
  int = setInterval(traveler, 10);
});

window.addEventListener("mouseup", e => {
  clearInterval(int);
  theBox.style.left = '0px'
  theBox.style.transition = 'all .2s'
});
