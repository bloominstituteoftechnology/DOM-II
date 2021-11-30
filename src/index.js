import "./less/index.less";

// Your code goes here!
const funBusHeader = document.querySelector("h1");

function linkHover() {
  funBusHeader.style.color = "yellow";
}

funBusHeader.addEventListener("mouseover", linkHover);
