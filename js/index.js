// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");
const images = document.querySelectorAll("img");
const coordSpan = document.createElement("span");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => link.classList.add("zoom"));
  link.addEventListener("mouseout", () => link.classList.remove("zoom"));
  link.addEventListener("mousedown", () => link.classList.remove("zoom"));
  link.addEventListener("mouseup", () => link.classList.add("zoom"));
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    document.fullscreenElement
      ? document.exitFullscreen()
      : image.requestFullscreen();
  });
  image.addEventListener("mousedown", () => {
    image.classList.add("zoomOut");
  });
  image.addEventListener("mouseup", () => {
    image.classList.remove("zoomOut");
  });
});
window.addEventListener("click", (e) => {
  e.preventDefault();
  window.alert(`You clicked X:${e.clientX}, Y:${e.clientY}`);
});
window.addEventListener("mousemove", (e) => {
  const xPos = e.clientX;
  const yPos = e.clientY;
  coordSpan.innerText = `X:${xPos}\nY:${yPos}`;
});
coordSpan.style.position = "absolute";
coordSpan.innerText = "testing";
coordSpan.style.top = "2em";
coordSpan.style.left = "2em";
document.querySelector("body").appendChild(coordSpan);

window.addEventListener("load", () =>
  console.log("%cPage Loaded!", "color: limegreen")
);
