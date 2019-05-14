// Event listeners

let navLinks = document.getElementsByClassName('nav-link');
// Simulate CSS hover pseudo selector for nav links
for (let element of navLinks) {
  element.addEventListener('mouseover', (event) => { event.target.style.opacity = 0.7; });
  element.addEventListener('mouseout', (event) => { event.target.style.opacity = 1.0; });
  element.addEventListener('click', (event) => { event.preventDefault(); });
};

class colorSwapper {
  constructor(colors) {
    this.colors = colors;
  }
  swap() {
    colors.unshift(colors.pop());
    return colors[0];
  }
}

const colors = ['black', 'green', 'blue', 'red', 'teal', 'orange', 'purple', 'crimson'];
let swapper = new colorSwapper(colors);

// Logo color swaps on mouseover
let logo = document.getElementsByClassName('logo-heading')[0];
logo.addEventListener('mouseover', (event) => {event.target.style.color = swapper.swap();});

// Click logo to change cursor
logo.addEventListener('click', (event) => {event.target.style.cursor = 'help';});

let intro = document.getElementsByTagName('header')[0];
// Intro image flips horizontally on click
let introImg = document.getElementsByTagName('img')[0];
introImg.addEventListener('click', (event) => {event.target.style.transform = 'scaleX(-1)';});

// Change intro paragraph to green on double click
let introParagraph = document.getElementsByTagName('p')[0];
introParagraph.addEventListener('dblclick', (event) => {event.target.style.color = 'green';});

let destinationSections = document.getElementsByClassName('destination');
let destinationButtons = document.getElementsByClassName('btn');
for (let element of destinationSections) {
  element.addEventListener('click', (event) => {event.target.style['background-color'] = swapper.swap();});
} 
// Stop propagation up to main destination section
for (let element of destinationButtons) {
  element.addEventListener('click', (event) => {event.stopPropagation(); event.target.style['background-color'] = swapper.swap();});
}

// Click text content to make it disappear
let textContent = document.getElementsByClassName('text-content');
for (let element of textContent) {
  element.addEventListener('click', (event) => {event.target.style.display = 'none';});
}
