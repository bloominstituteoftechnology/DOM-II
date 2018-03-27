// variables
const redBlock = document.querySelector('.block--red')
const blueBlock = document.querySelector('.block--blue')
const greenBlock = document.querySelector('.block-green')
const pinkBlock = document.querySelector('.block--pink')
const grayBlock = document.querySelector('.block--gray')

// rockets, go to top when clicked
const rockets = (event) => {
    // event.stopPropagation(); // not sure if needed yet
    event.target.style.order = -1;
}

blueBlock.addEventListener('click', rockets);


// test
redBlock.style.backgroundColor = 'orange';
