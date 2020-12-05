// Code to Grab Elements: 

// logo heading
const logo = document.querySelector("h1");
// console.log("Logo: ", logo);

// navigation
let navigation = document.querySelector(".nav");
// console.log(navigation);

const home = navigation.children[0];
const aboutUs = navigation.children[1];
const blog = navigation.children[2];
const contact = navigation.children[3];
// console.log("Home: ", home);
// console.log("About Us: ", aboutUs);
// console.log("Blog: ", blog);
// console.log("Contact: ", contact);

// intro
let intro = document.querySelector(".intro");
// console.log("Intro: ", intro);

// intro image
const introImg = intro.children[0];
// console.log("IntroImg: ", introImg);

// intro title
const introTitle = intro.children[1];
// console.log("IntroTitle: ", introTitle);

// buttons
let destinations = document.querySelector(".content-pick");
// console.log(destinations);

const buttonLeft = destinations.children[0].children[2];
const buttonMiddle = destinations.children[1].children[2];
const buttonRight = destinations.children[2].children[2];
// console.log("buttonLeft: ", buttonLeft);
// console.log("buttonMiddle: ", buttonMiddle);
// console.log("buttonRight: ", buttonRight);

// Code to Assign Event Listeners:

// event listener 1 - onmouseover on logo
logo.onmouseover = (e) => {
  console.log("event 1 triggered");
  gsap.to(logo, {duration: 3, rotation: 360, scale: 2, x: 200});
};

// event listener 2 - keydown on document
document.addEventListener('keydown', (e) => {
  console.log("event 2 triggered");
  gsap.to("p", {
      duration: 1, 
      stagger: 0.5, // stagger start times
      backgroundColor: "dodgerblue",
      repeat: 2, // number of repeats (-1 for infinite)
      repeatDelay: 1, // seconds between repeats
  });
});

// event listener 3 - wheel on introImg
introImg.addEventListener('wheel', zoom);

function zoom(event) {
  console.log("event 3 triggered");
  event.preventDefault();
  scale += event.deltaY * -0.01;
  // Restrict scale
  scale = Math.min(Math.max(.5, scale), 1.5);
  // Apply scale transform
  introImg.style.transform = `scale(${scale})`;
};
let scale = 1;
introImg.onwheel = zoom;

// event listener 4 - load on window
window.addEventListener('load', greeting);

  function greeting(event) {
    console.log("event 4 triggered");
    alert("Welcome!  You have triggered the 4th event!  The is a load event.  Have a great day!");
  };

  // event listener 5 - focus
  // event listener 6 - resize
  // event listener 7 - scroll
  // event listener 8 - select
  // event listener 9 - dblclick
  // event listener 8 - drag / drop

// gsap.to(".selector", { // selector text, Array, or object
//   x: 100, // any properties (not limited to CSS)
//   backgroundColor: "red", // camelCase
//   duration: 1, // seconds
//   delay: 0.5,
//   ease: "power2.inOut",
//   stagger: 0.1, // stagger start times
//   paused: true, // default is false
//   overwrite: "auto", // default is false
//   repeat: 2, // number of repeats (-1 for infinite)
//   repeatDelay: 1, // seconds between repeats
//   repeatRefresh: true, // invalidates on each repeat
//   yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
//   yoyoEase: true, // or ease like "power2"
//   immediateRender: false,
//   onComplete: myFunc,




/*


### Task 2: Create listeners for 10 types of events
For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:

Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

### Task 3: Stretch

* [x] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.
*/