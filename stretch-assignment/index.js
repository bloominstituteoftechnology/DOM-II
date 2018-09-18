// const redBlock = document.querySelector('.block block--red');
const greenBlock = document.querySelector('.block--green');


greenBlock.addEventListener('mousedown', (e) => {
    greenBlock.animate = -7;
    console.log('you clicked green');
});