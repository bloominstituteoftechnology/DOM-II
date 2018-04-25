// set up array to contain custom classes of each block element
let blockClsList = [];
// custom block classes pushed into blockClsList array
for (let i = 0; i < document.getElementsByClassName('blocks')[0].children.length; i++) {
    blockClsList.push(document.getElementsByClassName('blocks')[0].children[i].classList[1]);
};
// console.log(blockClsList);
// console.log(blockClsList.length);

// =======================  Rockets  ==========================

// When a block is clicked, it should go to the top of the stack
// holds current value of flex order at the time of a 'click' event
// let order = 0;
// // event
// const move = () => {
//     // decrement order: (-) orders will move to the top of the main-axis
//     // default order is 0 for all blocks
// 	order--;
// 	event.target.style.order = order.toString();
// }

// for (let i = 0; i < blockClsList.length; i++) {
// 	document.querySelector('.'+blockClsList[i]).addEventListener('click', move);
// }
// ======================  Travelers  =========================
let marginPX = {};
let inter = {};

const moveRight = (event) => {
    console.log(event);
    window.clearInterval(inter[`${event.target.attributes[0].nodeValue}`]);
    inter[`${event.target.attributes[0].nodeValue}`] = setInterval(function () {
        // when margin is smaller than 300
        if (marginPX[`${event.target.attributes[0].nodeValue}`] === undefined) {
            marginPX[`${event.target.attributes[0].nodeValue}`] = 10;
        }
        if (marginPX[`${event.target.attributes[0].nodeValue}`] < 1000) {
            marginPX[`${event.target.attributes[0].nodeValue}`]++;
            event.target.style.marginLeft = marginPX[`${event.target.attributes[0].nodeValue}`] + 'px';
        }
    }, 5);
    console.log(marginPX);
}

// sets event listeners for mousedown on all blocks
for (let i = 0; i < blockClsList.length; i++) {
    document.querySelector('.' + blockClsList[i]).addEventListener('mousedown', moveRight);
}

const moveBack = (event) => {
    window.clearInterval(inter[`${event.target.attributes[0].nodeValue}`]);
    inter[`${event.target.attributes[0].nodeValue}`] = setInterval(function () {
        clearInterval(moveRight);
        if (marginPX[`${event.target.attributes[0].nodeValue}`] > 10) {
            marginPX[`${event.target.attributes[0].nodeValue}`]--;
            event.target.style.marginLeft = marginPX[`${event.target.attributes[0].nodeValue}`] + 'px';
        }   
    }, 5);
}

// sets event listeners for mouseup on all blocks
for (let i = 0; i < blockClsList.length; i++) {
    document.querySelector('.' + blockClsList[i]).addEventListener('mouseup', moveBack);
}