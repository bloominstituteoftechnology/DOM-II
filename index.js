// const box1 = document.getElementsByClassName("block--blue");
// box1.addEventListener("click", (event) => {
//     console.log("hi");
// });

// Rockets

// const rockets = document.getElementsByClassName("block");
// Array.from(rockets).forEach(rocket => { // add an event listener to each of the elements.
//     rocket.addEventListener("click", () => {
        
//         // const parent = rocket.parentNode; // this just makes up for the below code.
//         // // rocket.parentNode.removeChild(rocket); // removes rocket from the parent node.
//         // parent.removeChild(rocket);
//         // parent.prepend(rocket);

//         rocket.parentNode.prepend(rocket); // does all the above steps automatically.

//     });
// });

// Ivan's solution for Rockets

// Travelers

class Traveler {
    constructor(element) {
        this.element = element; // for each of these dom nodes, we are going to construct a class with this information.
        this.distance = 10;
        this.element.addEventListener("mousedown", () => {
            this.travelAway();
        });
    }

    travelAway() {
        const element = this.element;
        let distance = this.distance;
        this.interval = window.setInterval(() => {
            distance += 1;
            element.style.marginLeft = `${distance}px`;
        }, 10); // every 10 milliseconds, add +10 margin to the left of the element.
    }
}

let travelers = document.getElementsByClassName("block");
travelers = Array.from(travelers).map(traveler => {
    return new Traveler(traveler);
});

// Ivan's solution for Travelers