import './less/index.less'

// Your code goes here!



//1. Changes the body background Color when mousemoves in header image
const backgroundChanger = document.querySelector(".container .intro img");


backgroundChanger.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
});

//2. Changes the body font Color when clicking the nav links

const nav = document.querySelector(".nav")

nav.children[0].addEventListener("click", randomColor);
nav.children[1].addEventListener("click", randomColor);
nav.children[2].addEventListener("click", randomColor);
nav.children[3].addEventListener("click", randomColor);

function randomColor() {
  const newColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.color = "#" + newColor;
}

//3. This area is for the first sign me up button
const placePicker = document.querySelector(".content-pick");

placePicker.children[0].children[2].addEventListener("mouseenter", buttonGone);

function buttonGone(e){
     e.target.style.display = "none";
}

//4. Changes the middle sign me up button text
placePicker.children[1].children[2].addEventListener("click", clickAgain)
placePicker.children[1].children[2].addEventListener("dblclick", clickTwice);

function clickAgain(e){
     e.target.textContent = "Hmm, Try a double click";
}

function clickTwice(e) {
  e.target.textContent = "Sorry, You can't come.";
}
//5. This area is for the third sign me up button

placePicker.children[2].children[2].addEventListener("mouseup", (e) => {
  e.target.style.background = "pink";
  e.target.style.fontWeight = "bold";
  e.target.style.color = "black";
});

placePicker.children[2].children[2].addEventListener("mouseleave", buttonGone);

