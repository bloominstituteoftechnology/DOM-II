// variables
const blocks = document.querySelectorAll('.blocks')
const redBlock = document.querySelector('.block--red')
const blueBlock = document.querySelector('.block--blue')
const greenBlock = document.querySelector('.block-green')
const pinkBlock = document.querySelector('.block--pink')
const grayBlock = document.querySelector('.block--gray')

// event handler rockets

const rockets = (event) => {
    // event.stopPropagation(); // not sure if needed yet
    const parent = event.target.parentNode;
    parent.removeChild(event.target);
    // event.target.style.order = -1;
    parent.prepend(event.target);
}

// event listener
blocks.forEach((element) => {
    element.addEventListener('click', rockets); 
})


// alt attempt

// // rockets, go to top when clicked

// const rockets = (event) => {
//     // event.stopPropagation(); // not sure if needed yet
//     const parent = event.target.parentNode;
//     parent.removeChild(event.target);
//     // event.target.style.order = -1;
//     parent.prepend(event.target);
// }

// rockets event listeners

// redBlock.addEventListener('click', rockets);
// blueBlock.addEventListener('click', rockets);
// greenBlock.addEventListener('click', rockets);
// pinkBlock.addEventListener('click', rockets);
// grayBlock.addEventListener('click', rockets);