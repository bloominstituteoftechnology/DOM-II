// Your code goes here
const h1 = document.querySelector("h1");
const aTags = document.querySelectorAll("a");

const jumbo = document.querySelector(".home .intro img");

const btns = document.querySelectorAll(".btn");

const contentSections = document.querySelectorAll(".content-section");

const contentSectionsImgs = document.querySelectorAll(".content-section img");

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

let timedEvent;
let myTimer = setInterval(timedEvent, 500);

h1.draggable = true;
h1.addEventListener('drag', (e) => {
  e.target.style.backgroundColor = 'grey';
  e.target.innerHTML = "under construction";
})

h1.addEventListener("dragend", (e) => {
  e.target.innerHTML = "Fun Bus";
  e.target.style.backgroundColor = 'white';
}, false);

aTags.forEach(aTag => aTag.addEventListener('mouseover', (e) => {
  e.target.style.color = rainbow[Math.floor(Math.random()*rainbow.length)];
}));

aTags[2].addEventListener('click', (e) => {
  e.stopPropagation();
})


jumbo.addEventListener('mouseover', (e) => {
  e.target.src = "img/wall-e-bus.jpg";
  e.target.alt = "Yellow bus with Disney character Wall-E";
  e.target.style.maxHeight = "100%";
  e.target.style.marginTop = "-50px";
})

jumbo.addEventListener('mouseout', (e) => {
  e.target.src = "img/fun-bus.jpg";
  e.target.style.marginTop = "0px";
})

contentSections.forEach(aTag => aTag.addEventListener('dblclick', (e) => {
  e.target.style.visibility = 'hidden';

  setTimeout(function() {
    e.target.style.visibility = 'visible';

  }, 1500);
}));

const imgArr = ["img/adventure.jpg", "img/fun.jpg"]

contentSectionsImgs.forEach(aTag => aTag.addEventListener('dblclick', (e) => {
  e.target.src = "img/wall-e-bus.jpg";

  setTimeout(function() {
    e.target.src = imgArr[Math.floor(Math.random()*imgArr.length)]

  }, 2500);
}));


btns.forEach(btn => btn.addEventListener('click', (e) => {
  e.target.innerText = "Thanks for signing up!"
}))


