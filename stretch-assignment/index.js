// Rocket: 

let boxes = document.querySelectorAll(".block")
// let order = 0;
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener('click', () => {
//         order--;
//         boxes[i].style.order = order.toString();
//     })
// }

// travelers
let marginLeft = 0;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mousedown', (event) => {
        let myVar = setInterval(function () {
            marginLeft++
            boxes[i].style.marginLeft = `${marginLeft}px`;
        }, 10)
    })
}

window.addEventListener('mouseup', () => {
    clearInterval(myVar)
})