const spaceStation = document.querySelectorAll('.blocks div');
function rocketReset() {
  spaceStation.forEach((rocket) => {
    rocket.style.order = '2';
  });
}

spaceStation.forEach((rocket) => {
  rocket.addEventListener('click', (item) => {
    rocketReset();
    rocket.style.order = '1';
  });
});

rocketReset();

let count = 0;
function blastOff() {
  count += 40;
  testRocket.style.marginLeft = `${count}px`;
}

testRocket.addEventListener('mousedown', (item) => {
  setInterval(blastOff, 500);
});
