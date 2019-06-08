// Your code goes here
//Variable Declarations
const home = document.querySelector(".home");
const heroImg = document.querySelector(".container .intro img");

const btns = document
  .querySelectorAll(".btn")
  .forEach(elem => elem.addEventListener("click", playJingle, true));

const happyAudio = new Audio("audio/happy.mp3");

const modal = document.createElement("div");
modal.classList.add("modal");
home.prepend(modal);

//Functions
function moveHero(e) {
  e.target.style.right = 0;
  console.log("heroMoved");
  e.target.removeEventListener("mouseover", moveHero, true);
}

function playJingle(e) {
  happyAudio.play();
}

//Event Listeners
heroImg.addEventListener("mouseover", moveHero, true);

// ***Unique Listeners***
// click
// mouseover
//resize
