// Your code goes here
const funBus = document.querySelector('.logo-heading');
console.log(funBus);




// Returns a function that can be used in an event handler to allow the mousewheel to cycle through color for the target element
const colorSpinner = () => {
  let counter = 0.50;
  const color = ['salmon', 'dodgerblue', 'black', 'heatherpurple', 'tomato', 'seagreen', 'chocolate', 'deeppink', 'yellow', 'crimson']
  return function (event) {
    let change = event.deltaY; //records mouse wheel movement
    if (change < 0) {
         counter += 0.05;
      if(counter >= 1) counter = 0;
    }  // mousewheel movement increases or decreases counter variable
    if (change > 0) {
      counter -= 0.05;
      if(counter <= 0) counter = 0.95;
    }
    // console.log(counter);
    let colorIndex = Math.floor(counter*10); //takes counter value, and provides
    // console.log(colorIndex);
    event.target.style.color = color[colorIndex];
    // console.log(event)
  }
}
const paraSpinner = colorSpinner();
funBus.addEventListener('wheel', paraSpinner);

const footer = document.querySelector('footer');
footer.addEventListener('click', function(event) {
  event.target.classList.toggle('background-change');
})
