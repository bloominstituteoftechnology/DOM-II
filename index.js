// variables
const blocks = document.querySelectorAll('.blocks')
const redBlock = document.querySelector('.block--red')
const blueBlock = document.querySelector('.block--blue')
const greenBlock = document.querySelector('.block-green')
const pinkBlock = document.querySelector('.block--pink')
const grayBlock = document.querySelector('.block--gray')

// event handler rockets
const rockets = (event) => {    
    const parent = event.target.parentNode;
    parent.removeChild(event.target);    
    parent.prepend(event.target);
}

// STRETCH GOALS
// travelers

// const travelRed = (event) => {
//     // let traveler = event.target;
//     // traveler = event.currentTarget;       
//     redBlock.style.marginLeft += '1px';    
//     const travelers = setInterval(travelRed, 10);      
// }

const travelEvent = (e) => {
    let distance = 0
    const moveRight = () => {
      distance += 10
      e.target.style.marginLeft = `${distance}px`;
    }
    setInterval(moveRight, 10);    
  }

const travelBack = (event) => {
    // event.target.style.marginLeft = '10px';
    clearInterval(travelRight);
    e.target.style.transform = 'translateX(10px)';
}

// event listener
blocks.forEach((element) => {
    element.addEventListener('click', rockets); 
    element.addEventListener('mousedown', travelEvent);
    element.addEventListener('mouseup', travelBack);

    // redBlock.addEventListener('mousedown', travelRed);
    // blueBlock.addEventListener('mousedown', travelBlue);
    // blueBlock.addEventListener('mouseup', travelBack);
    // greenBlock.addEventListener('mouseup', travelBack);
    // pinkBlock.addEventListener('mouseup', travelBack);
    // grayBlock.addEventListener('mouseup', travelBack);   
})