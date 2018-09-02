class Rocket {
    constructor(rocket) {
        this.item = rocket;

        this.item.addEventListener('click', this.blastOff);
        this.item.addEventListener('mousedown', this.animate);
        this.item.addEventListener('mouseup', this.animateBack);
    }

    // blastOff method
    blastOff() {
        console.log("Inside blastoff() " + event.currentTarget)
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

        // for (let i = 0; i < rockets.length; i++) {
        //     if (rockets[i] === event.target) {
        //         event.target.style.order = "1";
        //     } else {
        //         rockets[i].style.order = "0";
        //     }
        // }

        animate() {
            let start = Date.now(); // Start time
            let element = event.currentTarget;

            let timer = setInterval(function() {
              // Elapsed time from the start
              let elapsedTime = Date.now() - start;
            
              if (elapsedTime >= 5000) {
                clearInterval(timer); // Animation finishes after 5 seconds
                return;
              }
            
              // Draw the animation
              draw(elapsedTime, element);
            
            }, 10);
            
            // As elapsedTime increases, left increases from 0px to 5000px
            function draw(elapsedTime, e) {
                e.style.position = "relative";
                e.style.left = elapsedTime + 'px';
            } 
        }

        // animateBack() {
        //     let start = Date.now(); // Start time
        //     let element = event.currentTarget;
        //     let bodyRect = document.body.getBoundingClientRect(),
        //         elemRect = element.getBoundingClientRect(),
        //         offset = elemRect.left - bodyRect.left;

        //     let timer = setInterval(function() {
        //       // Elapsed time from the start
        //       let elapsedTime = Date.now() - start;
            
        //       if (elapsedTime >= 5000) {
        //         clearInterval(timer); // Animation finishes after 5 seconds
        //         return;
        //       }
            
        //       // Draw the animation
        //       draw(elapsedTime, element);
            
        //     }, 10);
            
        //     // As elapsedTime increases, left increases from 0px to 5000px
        //     function draw(elapsedTime, e) {
        //         e.style.position = "relative";
        //         e.style.left = elapsedTime + 'px';
        //     } 
        // }
}


let rockets = document.querySelectorAll(".block");
const redRocket = document.querySelector(".block--red");
const blueRocket = document.querySelector(".block--blue");
const greenRocket = document.querySelector(".block--green");
const pinkRocket = document.querySelector(".block--pink");
const grayRocket = document.querySelector(".block--gray");


rockets = Array.from(rockets).map( rocket => new Rocket(rocket));