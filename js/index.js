// Your code goes here
//window.onload = widenContainer;
console.log("test works");

let anchorCol = document.querySelectorAll("Nav a");
anchorCol.forEach((el) => {
  el.style.color = "#00FF00";
  el.style.padding = "8px";
  el.style.background = "red";
  el.margin = "3px";
});
//logo Heading manipulation using dblclick

let logoHead = document.querySelectorAll(".logo-heading");
logoHead.forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    event.target.parentElement.style.border = "2px solid blue";
    event.target.parentElement.style.background = "#27e6d4";
    event.target.style.border = "2px solid red";
    event.target.style.color = "white";
    event.target.style.background = "tomato";
    event.target.style["font-size"] = "70px";

    event.target.parentElement.style.transform = "rotate(30 deg)";
  });
});

//Resize
const heightOutput = document.querySelector("body");
const widthOutput = document.querySelector("body");

function reportWindowSize() {
  let newContent1 = document.createElement("div");
  newContent1.style.background = "green";
  newContent1.style.width = "15px";
  newContent1.style.float = "right";
  newContent1.style.display = "flex";

  let Nava1 = document.querySelector("html");
  Nava1.display = "flex";
  Nava1.width = "10px";
  Nava1.float = "left";

  newContent1.textContent =
    "Height*Weight- px:" + window.innerHeight + "*" + window.innerWidth;
  Nava1.appendChild(newContent1);
}

window.onresize = reportWindowSize;

//load type EventListener
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

//Head image with mouseover and mouseout
const headImage = document.querySelector(".intro img");

headImage.addEventListener("mouseover", function () {
  headImage.style.transform = "translate(80%, 5px)";

  headImage.style.transition = "transform 1s";
});

headImage.addEventListener("mouseout", function () {
  headImage.style.transform = "scale(1)";
});

//select trigger
function logSelection(event) {
  //create an element
  let log = document.createElement("input");

  let selectedTxt = document.querySelector(".content-section");

  //const log = document.getElementById("log");
  log = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log.textContent = `You selected: ${selection}`;
  return selectedTxt.appendChild(log);
}

const input = document.querySelector(".text-content");
input.addEventListener("select", logSelection);

let NewHeader = document.createElement("div");

NewHeader.addEventListener("mouseover", function () {
  NewHeader.style.margin = "20%";
  NewHeader.style.transform = "rotate(180deg)";
  NewHeader.style.transform = "translate(-500px, 5px)";
  NewHeader.style.transition = "transform 1s";
});

NewHeader.addEventListener("mouseout", function () {
  NewHeader.style.margin = "5%";
  NewHeader.style.transform = "scale(1)";
  NewHeader.style.transform = "rotate(30deg)";
  NewHeader.style.transform = "translate(200px, 300px)";
  NewHeader.style.transform = "rotate(360deg)";
  NewHeader.style.transition = "transform 1s";
});
NewHeader.style.width = "500px";
NewHeader.style.marginTop = "3%";
NewHeader.style.padding = "20px";
NewHeader.style.float = "right";

NewHeader.style.fontSize = "30px";
//border = "5px solid blue";
NewHeader.style.backgroundColor = "red";
NewHeader.style.color = "yellow";
NewHeader.textContent = "Dipesh Koirala";

let x = document.querySelector("html");
//x.style.width = "110%";
x.prepend(NewHeader);
//x.style.color = "yellow";
console.log(NewHeader);

//wheel
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".home");

el.addEventListener("onwheel", zoom);

console.log(el);
