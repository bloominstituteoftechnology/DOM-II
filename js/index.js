// Global Variables
let currentOffset = 0;
const busIcon = document.querySelector(".bus-icon");

// Get page virtical offset and apply to bus-icon
window.addEventListener("scroll", event => {
  currentOffset = window.scrollY;
  busIcon.style.top = `${busIcon.style.top + currentOffset}px`;
});

// Bus icon follows mouse
window.addEventListener("mousemove", event => {
  busIcon.style.left = `${event.clientX + 1}px`;
  busIcon.style.top = `${event.clientY + currentOffset + 1}px`;
});

// Add visable border around clicked items
const container = document.querySelector(".home");
container.addEventListener("click", event => {
  event.target.style.border = "red solid 1px";
});
