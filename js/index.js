// Code to Grab Elements: -------------------------------------------------------

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

// destination image
const destinationImg = document.querySelector(".content-destination img")
// console.log(destinationImg);

// buttons
let destinations = document.querySelector(".content-pick");
// console.log(destinations);

const buttonLeft = destinations.children[0].children[2];
const buttonMiddle = destinations.children[1].children[2];
const buttonRight = destinations.children[2].children[2];
// console.log("buttonLeft: ", buttonLeft);
// console.log("buttonMiddle: ", buttonMiddle);
// console.log("buttonRight: ", buttonRight);

// Code to Assign Event Listeners: ----------------------------------------------

// event listener 1 - onmouseover on logo
logo.onmouseover = (e) => {
  console.log("event 1 triggered - onmouseover");
  gsap.to(logo, {duration: 3, rotation: 360, scale: 2, x: 200, color: "orange"});
};

// event listener 2 - keydown on document
document.addEventListener('keydown', (e) => {
  console.log("event 2 triggered - keydown");
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
  console.log("event 3 triggered - wheel");
  event.preventDefault();
  scale += event.deltaY * -0.01;
  // Restrict scale
  scale = Math.min(Math.max(.5, scale), 1.5);
  // Apply scale transform
  introImg.style.transform = `scale(${scale})`;
};
let scale = 1;

// event listener 4 - load on window
window.addEventListener('load', greeting);

function greeting(event) {
  console.log("event 4 triggered - load");
  alert("Welcome!  You have triggered the 4th event!  The is a load event.");
};

// event listener 5 - focus on nav a tags
home.addEventListener('focus', (e) => {
  console.log("event 5 triggered - focus");
  gsap.to(home, {
      // duration: 1, 
      borderRadius:"50% 100%",
      backgroundColor: "pink",
      padding: "3rem"
  });
});
aboutUs.addEventListener('focus', (e) => {
  console.log("event 5 triggered - focus");
  gsap.to(aboutUs, {
      // duration: 1, 
      borderRadius:"100% 50%",
      backgroundColor: "dodgerblue",
      padding: "3rem"
  });
});
blog.addEventListener('focus', (e) => {
  console.log("event 5 triggered - focus");
  gsap.to(blog, {
      // duration: 1, 
      borderRadius:"50% 100%",
      backgroundColor: "yellow",
      padding: "3rem"
  });
});
contact.addEventListener('focus', (e) => {
  console.log("event 5 triggered - focus");
  gsap.to(contact, {
      // duration: 1, 
      borderRadius:"100% 50%",
      backgroundColor: "lightgreen",
      padding: "3rem"
  });
});

// NOTE:  These trigger the document listening event

// event listener 6 - resize on window
window.addEventListener('resize', (e) => {
  console.log("event 6 triggered - resize");
  gsap.to(navigation, {
    opacity: .5,
  });
});

// event listener 7 - scroll on document
document.addEventListener('scroll', (e) => {
  console.log("event 7 triggered - scroll");
  gsap.to(introTitle, {
    duration: 1,
    fontSize: "5rem",
    x: "150"
  });
});

// event listener 8 - select
const selectText = document.querySelector("#selectTextId");
// console.log("selectText:", selectText);

selectText.addEventListener('select', (e) => {
  console.log("event 8 triggered - select");
});

// event listener 9 - dblclick on middle button
buttonMiddle.addEventListener('dblclick', (e) => {
  console.log("event 9 triggered - dblclick");
  gsap.to(buttonMiddle, {
    y: "-100",
    scale: 2.5,
    backgroundColor: "red"
  });
  buttonMiddle.textContent = "You did it!";
});

// event listener 10 - drag / drop
destinationImg.addEventListener('drag', (e) => {
  console.log("event 10 triggered - drag");
});

// need to use event.preventDefault() on dragenter and dragover 
document.addEventListener('dragenter', (e) => {
    e.preventDefault()
});
document.addEventListener('dragover', (e) => {
  e.preventDefault()
});

document.addEventListener('drop', (e) => {
  console.log("event 11 triggered - drop");
  destinationImg.setAttribute("src", "https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg") 
});



// * [x] Stop the navigation items from refreshing the page 
navigation.addEventListener('click', (e) => {
  e.preventDefault();
});