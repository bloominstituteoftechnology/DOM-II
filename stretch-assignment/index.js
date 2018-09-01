class Rocket {
    constructor(rocket) {
        this.item = rocket;

        this.item.addEventListener('click', this.blastOff);
    }

    // blastOff method
    blastOff() {
        // event.currentTarget.style.order = "1";
        if (event.currentTarget === redRocket) {
            redRocket.style.order = "1";
            blueRocket.style.order = "0";
            greenRocket.style.order = "0";
            pinkRocket.style.order = "0";
            grayRocket.style.order = "0";
        } else if (event.currentTarget === blueRocket) {
            redRocket.style.order = "0";
            blueRocket.style.order = "1";
            greenRocket.style.order = "0";
            pinkRocket.style.order = "0";
            grayRocket.style.order = "0";
        } else if (event.currentTarget === greenRocket) {
            redRocket.style.order = "0";
            blueRocket.style.order = "0";
            greenRocket.style.order = "1";
            pinkRocket.style.order = "0";
            grayRocket.style.order = "0";
        } else if (event.currentTarget === pinkRocket) {
            redRocket.style.order = "0";
            blueRocket.style.order = "0";
            greenRocket.style.order = "0";
            pinkRocket.style.order = "1";
            grayRocket.style.order = "0";
        } else {
            redRocket.style.order = "0";
            blueRocket.style.order = "0";
            greenRocket.style.order = "0";
            pinkRocket.style.order = "0";
            grayRocket.style.order = "1";
        }
        
        console.log('Blast off 🚀')
    }
}


let rockets = document.querySelectorAll(".block");
const redRocket = document.querySelector(".block--red");
const blueRocket = document.querySelector(".block--blue");
const greenRocket = document.querySelector(".block--green");
const pinkRocket = document.querySelector(".block--pink");
const grayRocket = document.querySelector(".block--gray");


rockets = Array.from(rockets).map( rocket => new Rocket(rocket));