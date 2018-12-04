// Your code goes here

const myHead = document.querySelector("header");
const home = document.querySelector(".home");
const myButton = document.querySelectorAll(".btn");
const aTag = document.querySelectorAll("a");
const busPic = document.querySelector(".bus");
const sandPic = document.querySelector(".sand");

aTag[0].addEventListener(
  "mouseenter",
  function(event) {
    event.preventDefault();
    // highlight the mouseenter target
    TweenMax.to(event.target, 0.1, { scale: 1.1 });
    event.target.style.color = "red";
  },
  false
);

aTag[0].addEventListener(
  "mouseleave",
  function(event) {
    event.preventDefault();
    // highlight the mouseenter target
    TweenMax.to(event.target, 0.1, { scale: 1.0 });
    event.target.style.color = "";
  },
  false
);

aTag[1].addEventListener(
  "mouseenter",
  function(event) {
    event.preventDefault();
    // highlight the mouseenter target
    TweenMax.to(event.target, 0.1, { scale: 1.1 });
    event.target.style.color = "red";
  },
  false
);

aTag[1].addEventListener(
  "mouseleave",
  function(event) {
    event.preventDefault();
    // highlight the mouseenter target
    TweenMax.to(event.target, 0.1, { scale: 1.0 });
    event.target.style.color = "";
  },
  false
);

aTag[2].addEventListener(
  "mouseenter",
  function(event) {
    event.preventDefault();
    // highlight the mouseenter target
    TweenMax.to(event.target, 0.1, { scale: 1.1 });
    event.target.style.color = "red";
  },
  false
);

aTag[2].addEventListener(
  "mouseleave",
  function(event) {
    event.preventDefault();
    // highlight the mouseenter target
    TweenMax.to(event.target, 0.1, { scale: 1.0 });
    event.target.style.color = "";
  },
  false
);

aTag[3].addEventListener(
  "mouseenter",
  function(event) {
    event.preventDefault();
    // highlight the mouseenter target
    TweenMax.to(event.target, 0.1, { scale: 1.1 });
    event.target.style.color = "red";
  },
  false
);

aTag[3].addEventListener(
  "mouseleave",
  function(event) {
    event.preventDefault();
    // highlight the mouseenter target
    TweenMax.to(event.target, 0.1, { scale: 1.0 });
    event.target.style.color = "";
  },
  false
);

window.addEventListener("resize", function(e) {
  e.preventDefault();
  home.style["background-color"] = "red";
  setTimeout(function() {
    home.style["background-color"] = "";
  }, 1500);
});

dragElement(document.getElementById("bus"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
