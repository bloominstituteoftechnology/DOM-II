// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");
const images = document.querySelectorAll("img");
const coordSpan = document.createElement("span");
coordSpan.style.position = "fixed";
coordSpan.innerText = "coord";
coordSpan.style.top = "2em";
coordSpan.style.left = "2em";
const scrollSpan = document.createElement("span");
scrollSpan.style.position = "fixed";
scrollSpan.innerText = "scroll";
scrollSpan.style.top = "2em";
scrollSpan.style.right = "2em";
document.querySelector("body").appendChild(coordSpan);
document.querySelector("body").appendChild(scrollSpan);

const logEventToConsole = (event) =>
  console.log(`${event.type} event detected. Target: ${event.target}`);

const toggleZoom = (link) => {
  // destructure object provided as argument
  const { element, value } = link;
  // add or remove zoom class
  switch (value) {
    case true:
      element.classList.add("zoom");
      break;
    default:
      element.classList.remove("zoom");
      break;
  }
};

const addEventListeners = (link) => {
  // enlarge button when moused over
  link.addEventListener("mouseover", () => {
    toggleZoom({ element: link, value: true });
    // no need to explicitly declare or provide {event} as argument, it is passed by default in an event listener
    logEventToConsole;
  });
  // return to normal size when cursor moves away from element
  link.addEventListener("mouseout", () => {
    toggleZoom({ element: link, value: false });
    logEventToConsole;
  });

  // make button animate when clicked, keeping it small until you let the mouse button go
  link.addEventListener("mousedown", () => {
    toggleZoom({ element: link, value: false });
    logEventToConsole;
  });
  link.addEventListener("mouseup", () => {
    toggleZoom({ element: link, value: true });
    logEventToConsole;
  });

  link.addEventListener("click", (event) => {
    event.preventDefault();
    logEventToConsole;
  });
};

navLinks.forEach((link) => {
  addEventListeners(link);
});

images.forEach((image) => {
  image.setAttribute("title", "Click me!");
  image.addEventListener("click", (event) => {
    event.stopPropagation();
    document.fullscreenElement
      ? document.exitFullscreen()
      : image.requestFullscreen();
  });
  image.addEventListener("fullscreenchange", logEventToConsole);
  image.addEventListener("mousedown", () => {
    // scale image while mouse held down for a "bounce" effect on fullscreen selection
    image.classList.add("zoomOut");
  });
  image.addEventListener("mouseup", () => {
    image.classList.remove("zoomOut");
  });
});

window.addEventListener("click", (event) => {
  event.preventDefault();
  logEventToConsole;
  console.log(`You clicked X:${event.clientX}, Y:${event.clientY}`);
});

window.addEventListener("mousemove", (event) => {
  const xPos = event.clientX;
  const yPos = event.clientY;
  coordSpan.innerText = `COORD\nX:${xPos}\nY:${yPos}`;
});

window.addEventListener("load", () => {
  logEventToConsole;
  console.log("%cPage Loaded!", "color: limegreen");
});

window.addEventListener("scroll", () => {
  scrollSpan.innerText = `SCROLL\nX:${scrollX}\nY:${scrollY}`;
});

window.addEventListener("resize", logEventToConsole);
