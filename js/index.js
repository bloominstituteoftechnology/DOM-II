// Your code goes here

// MOUSEOVER

// KEYDOWN

// WHEEL

// DRAG / DROP

// LOAD

// FOCUS

// RESIZE
window.addEventListener("resize", () => {
  const cityBus = document.querySelector(".intro img");
  cityBus.src = "img/fun-bus-city.jpg";
});

// SCROLL

// SELECT

//DBLCLICK
const changeImage = document.querySelector(".intro img");
console.log(changeImage);

changeImage.addEventListener("dblclick", () => {
  changeImage.src = "img/volkswagen.jpg";
});
