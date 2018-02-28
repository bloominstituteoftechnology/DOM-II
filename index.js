/*      ###from the Instructor 
const rockets = document.getElementsByClassName("block");
Array.from(rockets).forEach(rocket =>{
    rocket.addEventListener("click", () => {
        const parent = rocket.parentNode;
        parent.removeChild(rocket);
        parent.prepend(rocket);
    });
});
*/


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
      distance += 1;
      element.style.marginLeft = `${distance}px`;
    }, 10);
  }
}

let travelers = document.getElementsByClassName('block');
travelers = Array.from(travelers).map(traveler => {
  return new Traveler(traveler);
});