// Your code goes here

//dblclick
const body = document.querySelector("body");
body.addEventListener("dblclick", () => {
  body.style.backgroundColor = "aqua";
});

//mouseenter
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseenter", () => {
  logo.style.transform = "scale(2)";
  logo.style.transition = "transform 1s";
});

//mouseleave
logo.addEventListener("mouseleave", () => {
  logo.style.transform = "scale(1)";
  logo.style.transition = "transform 1s";
});

//cut event w/ preventDefault
const source = document.querySelector("h2");

source.addEventListener("cut", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  selection.deleteFromDocument();
  event.preventDefault();
});

//paste event w/ preventDefault
const target = document.querySelector("div .text-content");
target.addEventListener("paste", (e) => {
  let paste = (e.clipboardData || window.clipboardData).getData("text");
  paste.toUpperCase();

  const selection = window.getSelection();
  if (!selection.rangeCount) return false;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(paste));
  e.preventDefault();
});

//click events + stopPropogation & preventDefault
const footer = document.querySelector(".footer");
footer.addEventListener("click", (e) => {
  e.footer.style.backgroundColor = "LightGreen";
  console.log("start");
});

const navStopP = document.querySelector("nav");
navStopP.addEventListener("click", (e) => {
  navStopP.style.backgroundColor = "hotpink";
  e.stopPropagation();
  console.log("start");
});

const stopNav = document.querySelector(".nav-link");
stopNav.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("stopped!");
});

//selection logger *I don't really know if this is working but there is no error in console.
function logSelection(e) {
  const log = document.getElementsByClassName("destination");
  const selection = e.target.value.substring(
    e.target.selectionStart,
    e.target.selectionEnd
  );
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector(".content-destination");
input.addEventListener("select", logSelection);

let evtSource = document.querySelector("body");
evtSource.addEventListener("open", (e) => {
  console.log("The page has been opened");
});

