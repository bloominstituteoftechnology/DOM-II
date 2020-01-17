// Your code goes here

//our image toggling callback functions for busImage
let funBus = event => {
  event.target.src = "./img/fun-bus.jpg";
};

let funnerBus = event => {
  event.target.src = "./img/funnerBus.png";
};

//select top bus image and create mouseover event with callbacks
let busImage = document.querySelector(".intro img");

busImage.addEventListener("mouseenter", funnerBus);
busImage.addEventListener("mouseleave", funBus);

//point to bottom image element
let bottomBoat = document.querySelector(".content-destination img");

//event callback handles input of letter T to change boat image
let changeTheBoat = event => {
  console.log("callback triggered on  BOAT");
  console.log(event.code);
  if (event.code == "KeyT") {
    bottomBoat.src = "./img/oldBoat.png";
    console.log("the if statement works");
    alert("you went and made the boat OLD");
  }
};
//add event listener to window
window.addEventListener("keydown", changeTheBoat);

//create body selector
let htmlBody = document.querySelector("body");

let themeToggle = event => {
  if (event.target.style.backgroundColor == "white") {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
  } else {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
  }
};

htmlBody.addEventListener("dblclick", themeToggle);

let contentPickContainer = document.querySelector(".content-pick");

let addButton = event => {
  let newButton = document.createElement("div");
  let newButtonContainer = document.createElement("div");
  newButtonContainer.classList.add("destination");
  newButton.classList.add("btn");
  newButton.textContent = "POOR DESIGN CHOICE";
  newButtonContainer.appendChild(newButton);
  contentPickContainer.appendChild(newButtonContainer);
};

window.addEventListener("scroll", addButton);
