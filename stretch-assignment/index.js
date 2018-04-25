// // Selector for our Cubes
let boxes = document.querySelectorAll(".block")

// //Rocket:

// let order = 0;
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener('click', () => {
//         order--;
//         boxes[i].style.order = order.toString();
//     })
// }

// Travelers

// Declared variables
// for our setInterval functions
let myVar = ""
let travelBackVar = ""

// Modular functions to end set Intervals
function clearTravelBack() {
    clearInterval(travelBackVar);
}

function ClearTravel() {
    clearInterval(myVar);
}

// For loop adding our event-listeners to the Cubes
// Event mousedown to move right, mouseup to move left

for (let i = 0; i < boxes.length; i++) {
    let marginLeft = 10;
    boxes[i].addEventListener('mousedown', (event) => {
        clearTravelBack()
        myVar = setInterval(function () {
            if (marginLeft >= 399) {
                ClearTravel()
            }
            marginLeft++
            boxes[i].style.marginLeft = `${marginLeft}px`;
        }, 10)
    })
    boxes[i].addEventListener('mouseup', () => {
        // travelBackVar = setInterval(function ())
        ClearTravel()
        travelBackVar = setInterval(function () {
            if (marginLeft === 10) {
                clearTravelBack()
            }
            marginLeft--
            boxes[i].style.marginLeft = `${marginLeft}px`;
        })
    }, 10)
}