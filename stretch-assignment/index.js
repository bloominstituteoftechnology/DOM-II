class Rocket {
    constructor(rocket) {
        this.item = rocket;

        // Event listeners
        this.item.addEventListener('click', this.blastOff);
        this.item.addEventListener('mousedown', this.animate);

        // TODO: The 'mouseup' event doesn't seem to work very well
        // when the element has moved all the way across the screen.
        this.item.addEventListener('mouseup', this.animateBack);
    }

    // blastOff method
    // The animation probably needs to happen using an additional CSS class
    // that includes transition and transform properties
    blastOff() {
        // h/t to @john_spraul
        // Filter out all of the elements that aren't the current target
        const filtered = rockets.filter(elem => elem.item !== event.currentTarget);

        // Set the current target to order 1
        event.currentTarget.style.order = "1";

        // Set everything that's not the current target to order 0
        filtered.forEach(rocket => {
            rocket.item.style.order = "0";
        });
        
        // if (event.currentTarget === redRocket) {
        //     redRocket.style.order = "1"; 
        //     blueRocket.style.order = "0";
        //     greenRocket.style.order = "0";
        //     pinkRocket.style.order = "0";
        //     grayRocket.style.order = "0";
        // } else if (event.currentTarget === blueRocket) {
        //     redRocket.style.order = "0";
        //     blueRocket.style.order = "1";
        //     greenRocket.style.order = "0";
        //     pinkRocket.style.order = "0";
        //     grayRocket.style.order = "0";
        // } else if (event.currentTarget === greenRocket) {
        //     redRocket.style.order = "0";
        //     blueRocket.style.order = "0";
        //     greenRocket.style.order = "1";
        //     pinkRocket.style.order = "0";
        //     grayRocket.style.order = "0";
        // } else if (event.currentTarget === pinkRocket) {
        //     redRocket.style.order = "0";
        //     blueRocket.style.order = "0";
        //     greenRocket.style.order = "0";
        //     pinkRocket.style.order = "1";
        //     grayRocket.style.order = "0";
        // } else {
        //     redRocket.style.order = "0";
        //     blueRocket.style.order = "0";
        //     greenRocket.style.order = "0";
        //     pinkRocket.style.order = "0";
        //     grayRocket.style.order = "1";
        // }

        console.log('Blast off 🚀')
    }

    // animate method
    animate() {
        let start = Date.now(); // Start time
        let element = event.currentTarget;

        let timer = setInterval(function() {
            // Elapsed time from the start
            let elapsedTime = Date.now() - start;
        
            if (elapsedTime >= 1000) {
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

    // animateBack method
    // Should animate back to original position
    animateBack() {
        let element = event.currentTarget;
        let bodyRect = document.body.getBoundingClientRect(),
            elemRect = element.getBoundingClientRect(),
            rocketOffset = elemRect.left - bodyRect.left;

        setInterval(function() {
            // Draw the animation
            draw(rocketOffset, element);
        }, 10);
        
        function draw(offset, e) {
            e.style.position = "relative";
            e.style.right = offset + 'px';
        } 
    }
}


let rockets = document.querySelectorAll(".block");
const redRocket = document.querySelector(".block--red");
const blueRocket = document.querySelector(".block--blue");
const greenRocket = document.querySelector(".block--green");
const pinkRocket = document.querySelector(".block--pink");
const grayRocket = document.querySelector(".block--gray");


rockets = Array.from(rockets).map( rocket => new Rocket(rocket));