 const blocks = document.querySelector('.blocks');
// const ourFunction = (event) => {
//     event.stopPropagation();
//     let parent = event.target.parentNode;
//     parent.removeChild(event.target);
//     parent.prepend(event.target);
// };

// for (i = 0; i < blocks.children.length; i++) {
// blocks.children[i].addEventListener('click', ourFunction);
// }

let interval;
let distance = 0;

const travelRight = (e) => {
    clearInterval(interval);
    const moveRight = () => {
        distance++;
        e.target.style.marginLeft = `${distance}px`;
    };
    interval = setInterval(moveRight, 10);
};

const travelLeft = (e) => {
    clearInterval(interval);
    const moveLeft = () => {
        if (distance > 10) distance--;
        e.target.style.marginLeft = `${distance}px`;
    };
    interval = setInterval(moveLeft, 10);
};

for (let i = 0; i < blocks.children.length; i++) {
    blocks.children[i].addEventListener('mousedown', travelRight);
    blocks.children[i].addEventListener('mouseup', travelLeft);
}
