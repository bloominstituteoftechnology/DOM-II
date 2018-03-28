// rockets code

// let lowest = 0;

// const blocks = document.querySelector('.blocks');

// const rocket = (event) => {
//     lowest--;
//     event.target.style.order = lowest;
// }

// blocks.addEventListener('click', rocket);





// traveller code

const block = document.querySelectorAll('.block');

const moveRight = (event) => {
    rightInterval = window.setInterval(() => {
        console.log(event.target['rightShift']);
        if (event.target['rightShift'] > 10){
            event.target.addEventListener('mouseleave', moveLeft);
        }
        if (event.target['rightShift'] >= window.innerWidth - event.target.offsetWidth - 10) {
            clearInterval(rightInterval);
        }
        event.target['rightShift'] += 10;
        event.target.style.transform = 'translate(' + event.target['rightShift'] + 'px)';
    }, 100);
}

const moveLeft = (event) => {
    clearInterval(rightInterval);
    let leftInterval = window.setInterval(() => {
        console.log(event.target['rightShift']);
        if (event.target['rightShift'] === 10) {
            clearInterval(leftInterval);
        }
        if (event.target['rightShift'] >= 10){
            event.target['rightShift'] -= 10;
            event.target.style.transform = 'translate(' + event.target['rightShift'] + 'px)';
        }
        else clearInterval(leftInterval);
    }, 100);
}

for (let i = 0; i < block.length; i++) {
    block[i].rightShift = 0;
    block[i].addEventListener('mousedown', moveRight);
    block[i].addEventListener('mouseup', moveLeft);
}
