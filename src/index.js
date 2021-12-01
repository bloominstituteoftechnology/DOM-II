import "./less/index.less";

// Your code goes here!
const des = document.querySelectorAll("a.nav-link");

des.forEach((bar) => {
  bar.addEventListener("mouseover", function (evt) {
    evt.target.style.fontSize = "20px";
    // console.log("its working");
  });
});
des.forEach((bar) => {
  bar.addEventListener("mouseleave", function (evt) {
    evt.target.style.fontSize = "16px";
    // console.log("back to normal");
  });
});

const title = document.querySelectorAll("h2");

document.addEventListener("keydown", (evt) => {
  console.log(evt);
  if (evt.key === "Escape") {
    alert("Sorry! you cant use" + " " + evt.key);
  }
});

const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("wheel", (event) => zoom(event, img));
});
let scale = 1;
//images.onwheel = zoom;
function zoom(event, img) {
  event.preventDefault();
  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 1.5);

  // Apply scale transform
  img.style.transform = `scale(${scale})`;
}

const head = document.querySelector(".logo-heading");

head.addEventListener("dblclick", function (e) {
  head.style.fontSize = "50px";
  e.preventDefault();

  console.log("bigger");
  //head.style.fontSize = "40px";
});
// head.addEventListener("dblclick", function (e) {
//   head.style.fontSize = "40px";
//   console.log("same");
// });
