import './less/index.less'

// Your code goes here!



//Changes the body background Color when mousemoves in header image
const backgroundChanger = document.querySelector(".container .intro img");

document.body.style.backgroundSize = "cover";
backgroundChanger.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;
  document.body.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
});

//Changes the body font Color when clicking the nav links

const nav = document.querySelector(".nav")

nav.children[0].addEventListener("click", randomColor);
nav.children[1].addEventListener("click", randomColor);
nav.children[2].addEventListener("click", randomColor);
nav.children[3].addEventListener("click", randomColor);

function randomColor() {
  const newColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.color = "#" + newColor;
}

