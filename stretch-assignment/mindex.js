class SpaceShip {
  constructor(ship) {
    this.name = ship;
    ship.addEventListener('click', topRocket);
    ship.addEventListener('mousedown', thruster);
    document.addEventListener('mouseup', thrusterOff);
    ship.addEventListener('mouseup', thrusterOff);
    // ship.addEventListener('mouseleave', thrusterOff)
    ship.classList.add('defaultPosition');
    ship.style.left = 0 + 'px';
    function thruster() {
      thrusterOn = window.setInterval(launch, 200);
    }
    function thrusterOff() {
      clearInterval(thrusterOn);
    }

    let dist = 0;
    function launch() {
      ship.style.left = dist + 'px';
      dist += 50;
    }

    function topRocket() {
      rocketReset();
      ship.classList.add('topPosition');
    }
  }
}

var thrusterOn;

let armada = document.querySelectorAll('.block');

armada.forEach((rocket) => new SpaceShip(rocket));
function rocketReset() {
  armada.forEach((rocket) => {
    rocket.classList.remove('topPosition');
    // rocket.style.left = 0 + 'px';
  });
}

console.log(armada);
