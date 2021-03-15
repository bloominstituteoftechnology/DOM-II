// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");
const images = document.querySelectorAll("img");
const coordSpan = document.createElement("span");
coordSpan.style.position = "fixed";
coordSpan.innerText = "coord";
coordSpan.style.top = "2em";
coordSpan.style.left = "2em";
const scrollSpan = document.createElement("span");
scrollSpan.style.position = "fixed";
scrollSpan.innerText = "scroll";
scrollSpan.style.top = "2em";
scrollSpan.style.right = "2em";
document.querySelector("body").appendChild(coordSpan);
document.querySelector("body").appendChild(scrollSpan);

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => link.classList.add("zoom"));
  link.addEventListener("mouseout", () => link.classList.remove("zoom"));
  link.addEventListener("mousedown", () => link.classList.remove("zoom"));
  link.addEventListener("mouseup", () => link.classList.add("zoom"));
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.alert(`${e.target} clicked!`);
  });
});
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.stopPropagation();
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
  coordSpan.innerText = `COORD\nX:${xPos}\nY:${yPos}`;
});
window.addEventListener("load", () =>
  console.log("%cPage Loaded!", "color: limegreen")
);
window.addEventListener("scroll", () => {
  scrollSpan.innerText = `SCROLL\nX:${scrollX}\nY:${scrollY}`;
});
