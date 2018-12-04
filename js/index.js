// Your code goes here
// mouseover
const search = document.querySelector("#test");
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function(e) {
  logo.style.fontSize = "75px";
  search.style.display = "none";
  setTimeout(() => {
    logo.style.fontSize = "4rem";
    search.style.display = "";
  }, 1000);
});
// keydown
const keyPressed = document.querySelector(".fullscreen");
const container = document.querySelector(".home");

document.addEventListener("keydown", event => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  const keyName = event.key;
  container.style.opacity = 0;
  keyPressed.style.fontSize = "50px";
  keyPressed.textContent = keyName;
  setTimeout(() => {
    container.style.opacity = 1;
    keyPressed.textContent = "";
  }, 2000);
});
// wheel
const images = document.querySelectorAll("img");
const nav = document.querySelector(".main-navigation");

document.addEventListener("wheel", event => {
  nav.style.background = "#17A2B8";
  images.forEach(img => {
    img.style.transform = "scale(1.1)";
    setTimeout(() => {
      img.style.transform = "scale(1)";
      nav.style.background = "";
    }, 1000);
  });
});

// Drag / drop
function dragstart_handler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dropEffect = "move";
}

function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text/plain");
  ev.target.appendChild(document.getElementById(data));
}

// load
window.addEventListener("load", e => {
  document.body.className += " fade-out";
  setTimeout(() => {
    document.body.classList.remove("fade-out");
  }, 500);
});
// focus
focusScrollMethod = function getFocus() {
  document.querySelector("#cta-section").focus({ preventScroll: false });
};
// resize
window.addEventListener("resize", e => {
  container.style.opacity = 0;
  keyPressed.style.fontSize = "50px";
  keyPressed.style.left = "30%";
  keyPressed.textContent = `Width: ${e.currentTarget.outerWidth}, Height: ${
    e.currentTarget.outerHeight
  }`;
  setTimeout(() => {
    keyPressed.style.left = "50%";
    container.style.opacity = 1;
    keyPressed.textContent = "";
  }, 2000);

  //   console.log(e.target.outerHeight);
  //   console.log(e.target.outerWidth);
});
// scroll
window.addEventListener("scroll", e => {
  document.body.style.opacity = "0.5";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 700);
});
// select
const elem = document.getElementById("test");
elem.addEventListener(
  "select",
  e => {
    alert(e.target.value);
  },
  false
);
// dblclick
const navItems = document.querySelectorAll("nav a");
navItems.forEach(item => {
  item.addEventListener("dblclick", e => {
    e.target.style.color = "red";
    setTimeout(() => {
      e.target.style.color = "";
    }, 1000);
  });
});
