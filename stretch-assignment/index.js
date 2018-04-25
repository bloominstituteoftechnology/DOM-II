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

let myVar = ""
let travelBackVar1 = ""
let stateCountf = 0;
let stateCountb = 0;
for (let i = 0; i < boxes.length; i++) {
    let marginLeft = 10;
    boxes[i].addEventListener('mousedown', (event) => {
        clearVar()
        myVar = setInterval(function () {
            marginLeft++
            boxes[i].style.marginLeft = `${marginLeft}px`;
        }, 10)
    })
    boxes[i].addEventListener('mouseup', () => {
        // travelBackVar = setInterval(function ())
        clearInterval(myVar)
        travelBackVar = setInterval(function () {
            if (marginLeft === 10) {
                clearVar()
            }
            marginLeft--
            boxes[i].style.marginLeft = `${marginLeft}px`;
        })
    }, 20)
}
// boxes[i].addEventListener('mouseout', () => {
//     // travelBackVar = setInterval(function ())
//     if (marginLeft > 10) {
//         travelBackVar = setInterval(function () {
//             marginLeft--
//             if (marginLeft === 10) {
//                 clearInterval(travelBackVar);
//             }
//             boxes[i].style.marginLeft = `${marginLeft}px`;
//         })
//         clearInterval(myVar)
//     }
// })

function clearVar() {
    clearInterval(travelBackVar);
}