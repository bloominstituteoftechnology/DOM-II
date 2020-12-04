// Code to Grab Elements: 

// logo heading
const logo = document.querySelector("h1");
// console.log("Logo: ", logo);

// navigation
let navigation = document.querySelector(".nav");
console.log(navigation);

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


buttonLeft.onclick = (e) => {
  console.log('This is the event: ', e);
}



/*


### Task 2: Create listeners for 10 types of events
For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
  * `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop`

Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

### Task 3: Stretch

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.
*/