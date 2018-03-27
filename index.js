// Set up DOM element reference
const group = document.getElementsByClassName('blocks')[0];

// Click function
rockets = (event) => {
  // Move event target to top
  event.target.style.order = -1;

  // Set everything else to 0
  for (let i = 0; i < group.children.length; i++) {
    // If current child does not match target
    if (group.children[i] !== event.target){
      // reset order
      group.children[i].style.order = 0;
    } 
  }
}

// Interval function
changeColor = () => {
  for (let i = 0; i < group.children.length; i++) {
    group.children[i].classList.toggle('black'); 
  }
}

// Initialized event listeners
for (let i = 0; i < group.children.length; i++) {
  // click listener
  group.children[i].addEventListener('click', rockets);
  // mouse down listener
  group.children[i].addEventListener('mousedown', () => {
    group.children[i].style.marginLeft = '50px';
  });
  // mouse up listener
  group.children[i].addEventListener('mouseup', () => {
    group.children[i].style.marginLeft = '10px';
  });
  // interval
  const interval = setInterval(changeColor, 5000);
}
