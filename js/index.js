const header = document.querySelector("header");

// MOUSE OVER EVENT
header.addEventListener("mouseover", function() {
  if (header.style.backgroundColor != "pink") {
    header.style.backgroundColor = "pink";
  } else {
    header.style.backgroundColor = "white";
  }
});

const body = document.querySelector("body");

// KEYDOWN EVENT
body.addEventListener("keydown", function(e) {
  if (e.key === "b") {
    body.style.backgroundColor = "blue";
  } else if (e.key === "r") {
    body.style.backgroundColor = "red";
  } else if (e.key === "y") {
    body.style.backgroundColor = "yellow";
  }
});

body.addEventListener("keyup", function(e) {
  body.style.backgroundColor = "white";
});
