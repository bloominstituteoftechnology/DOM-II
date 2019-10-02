// Your code goes here

const links = document.querySelectorAll("a");
console.log(links);
links.forEach(ele => {
  ele.addEventListener("mouseover", () => {
    ele.style.color = "blue";
    ele.style.textDecoration = "underline";
  });
  ele.addEventListener("mouseout", () => {
    ele.style.color = "black";
    ele.style.textDecoration = "none";
  });
});

//***Change image on click event ****/
const imgNode = document.querySelectorAll("img");
console.log(imgNode);
imgNode.forEach(ele => {
  ele.addEventListener("click", () => {
    ele.src = "img/adventure.jpg";
  });
  ele.addEventListener("auxclick", () => {
    ele.src = "img/destination.jpg";
  });
});

// Trying to click through elements in imgNode //
// for (let i = 0; i < imgNode.length; i++) {
//   ele => {
//     ele.addEventListener("click", () => {
//       ele.src = "imgNode[i].src";
//     });
//   };
//   console.log(imgNode[i].src);
// }

const headings = document.querySelectorAll("h2");
function stopEvent(ev) {
  ev.stopPropagation();
  alert("event propagation halted!");
}
headings.forEach(ele => {
  ele.addEventListener("mousedown", () => {
    ele.style.color = "orange";
  });
  ele.addEventListener("mouseup", () => {
    ele.style.color = "black";
  });
});

const logoHeading = document.querySelector(".logo-heading");
console.log(logoHeading);
logoHeading.addEventListener("dblclick", () => {
  logoHeading.textContent = "Bus With Us!";
});

const toggle = document.querySelector("body");
toggle.addEventListener("keydown", () => {
  toggle.style.backgroundColor = "papayawhip";
});
toggle.addEventListener("keyup", () => {
  toggle.style.backgroundColor = "darkcyan";
});

const navLink = document.querySelector(".nav-link");
navLink.addEventListener("click", event => {
  console.log("PREVENTED DEAFAULT ACTION");
  event.preventDefault();
  console.log(event);
});
