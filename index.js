// const block = document.querySelectorAll(".block");

// block.forEach((elements) => {
//     elements.addEventListener("click", () => {        
//         const blocks = elements.parentNode;
//         blocks.removeChild(elements); // removes
//         blocks.prepend(elements); // adds element to start of list
//     });
// });

// --------------------- Travelers ----------------------

class Traveler {
    constructor(element) {
        this.element = element;
        this.distance = 10;
        this.element.addEventListener('mousedown', () => {
            this.travelAway();
        });
    }

    travelAway() {
        const element = this.element;
        let distance = this.distance;
        this.interval = window.setInterval(() => {
            distance++;
            element.style.marginLeft = `${distance}px`;
        }, 10);
    }
}

let travelers = Array.from(document.getElementsByClassName('block')).map(block => {
    return new Traveler(block);
});

console.log(travelers);