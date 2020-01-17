// Your code goes here

// MOUSEOVER

// KEYDOWN

// WHEEL

// DRAG / DROP

// LOAD

// FOCUS

// RESIZE

// RESIZE

// SCROLL

// SELECT

//DBLCLICK
const changeImage = document.querySelector(".intro img");
console.log(changeImage);

changeImage.addEventListener("dblclick", () => {
  changeImage.src = "img/volkswagen.jpg";
  // alt="white and teal volkswagen van die cast model"
});
