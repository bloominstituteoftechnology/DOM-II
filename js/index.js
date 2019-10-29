// Your code goes here

/* 
timeupdate	The time indicated by the currentTime attribute has been updated.
volumechange	The volume has changed. 

auxclick	A pointing device button (ANY non-primary button) has been pressed and released on an element.

mousedown	A pointing device button is pressed on an element.
mouseenter	A pointing device is moved onto the element that has the listener attached.
mouseleave	A pointing device is moved off the element that has the listener attached.
mousemove	A pointing device is moved over an element. (Fired continously as the mouse moves.)
pointerlockchange	The pointer was locked or released.
pointerlockerror	It was impossible to lock the pointer for technical reasons or because the permission was denied.
select	Some text is being selected.
resize	The document view has been resized.
scroll	The document view or an element has been scrolled.
*/
const header = document.querySelector("header");
header.addEventListener(
  "mouseenter",
  () => (header.style.backgroundColor = "red")
);

header.addEventListener(
  "mouseout",
  () => (header.style.backgroundColor = "#fff")
);

const buttons = document.querySelectorAll("button");
buttons.forEach(button =>
  button.addEventListener("click", () => (button.style.width = "10%"))
);
buttons.forEach(button =>
  button.addEventListener("dblclick", () => (button.style.width = "100%"))
);

const p = document.querySelectorAll("p");
p.forEach(p =>
  p.addEventListener("auxclick", e => {
    e.preventDefault();
    const div = e.target.parentElement;
    div.parentNode.removeChild(div);
  })
);

const links = document.querySelectorAll(".nav-link");
links.forEach(link => link.addEventListener("click", e => e.preventDefault()));

const busImg = document.querySelector(".intro img");
busImg.addEventListener("mouseup", () => (busImg.style.display = "none"));

const all = document.querySelector("*");
all.addEventListener("keypress", () => (all.style.backgroundColor = "black"));
all.addEventListener("keyup", () => (all.style.backgroundColor = "#fff"));

const images = document.querySelectorAll("img");
images.forEach(image =>
  image.addEventListener("click", e => {
    const div = e.target.parentElement;
    div.parentNode.removeChild(div);
  })
);
