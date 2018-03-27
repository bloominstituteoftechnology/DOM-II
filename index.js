const blocks = document.querySelectorAll('.blocks')
const redBlock =  document.querySelector('.block--red')
const blueBlock = document.querySelector('.block--blue')
const greenBlock = document.querySelector('.block--green')
const pinkBlock = document.querySelector('.block--pink')
const grayBlock = document.querySelector('.block--gray')

const rockets = (event) => {
    const parent = event.target.parentNode;
    parent.removeChild(event.target);
    parent.prepend(event.target);
}

blocks.forEach((element) => {
    element.addEventListener('click', rockets); 
})
