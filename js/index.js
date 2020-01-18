// Your code goes here

// MOUSEOVER
document.querySelectorAll(".nav a").forEach(element => {
  element.addEventListener("mouseover", () => {
    element.style.color = "#17a2b8";
  });
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});

// KEYDOWN

// WHEEL
// const advImg = document.querySelector('img-content')
// advImg.addEventListener ('wheel', () => {
//     advImg.addEventListener.style.transform = "scale (1.2)";
// }

// DRAG / DROP

// LOAD

// FOCUS

// RESIZE
window.addEventListener("resize", () => {
  const cityBus = document.querySelector(".intro img");
  cityBus.src = "img/fun-bus-city.jpg";
});

// SCROLL
document.addEventListener("scroll", () => {
  document.querySelectorAll("h2").forEach(item => {
    item.style.color = "#84760D";
  });
});

document.addEventListener("scroll", () => {
  document.querySelectorAll("h4").forEach(item => {
    item.style.color = "#ec113b";
  });
});

// SELECT

//DBLCLICK
const changeImage = document.querySelector(".intro img");
console.log(changeImage);

changeImage.addEventListener("dblclick", () => {
  changeImage.src = "img/volkswagen.jpg";
});
