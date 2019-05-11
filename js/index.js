// Your code goes here


// #1 DBLCLICK
const logo = document.querySelector('.logo-heading');
console.log(logo);
logo.addEventListener('dblclick', function(e) {
  console.log("The Logo was double clicked!");
});

// #2 MOUSEOVER
const busImg = document.querySelector(".busImg");
console.log(busImg);
busImg.addEventListener("mouseover", function(e) {
  console.log("Mouse went over the Bus Image!");
  busImg.style.width = "80%";
});

// #3 KEYDOWN
const accidentalKey = document.querySelector("body");
console.log(accidentalKey);
accidentalKey.addEventListener("keydown", function(e) {
  console.log(`Reader accidentally pressed ${e.key}`);
  accidentalKey.style.backgroundColor = "#019875";
  accidentalKey.style.color = "white";
});

// #4 ONWHEEL --- Found on Map Image

function zoom(e) {
  if (e.deltaY < 0) {
    // Zoom in
    scale *= e.deltaY * -2;
  }
  else {
    // Zoom out
    scale /= e.deltaY * 0.5;
  }

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 1.15);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.travel-map');
document.onwheel = zoom;


// #5 RESIZE


// SCROLL