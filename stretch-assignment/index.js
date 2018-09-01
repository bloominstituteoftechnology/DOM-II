class Rocket {
    constructor(rocket) {
        this.item = rocket;
        
        if (this.item.style != null) {
            this.item.style.order = "0";
        }

        this.item.addEventListener('click', this.blastOff);
    }

    // blastOff method
    blastOff() {
        event.currentTarget.style.order = "1";
        console.log('Blast off 🚀')
    }
}


let rockets = document.querySelectorAll(".block");

rockets = Array.from(rockets).map( rocket => new Rocket(rocket));