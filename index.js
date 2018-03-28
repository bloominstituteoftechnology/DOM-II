const blocks = document.querySelectorAll(".block");

const rocketEvent = (event) => {
    const child = event.target;
    const parent = event.target.parentNode
    parent.removeChild(event.target);
    parent.prepend(event.target);
}

// const travelerEvent = (event) => {
//     event.target.style.transform = `translateX(200px)`;
// };

const travelerEvent = (e) => {
    let distance = 0
    const moveRight = () => {
        distance += 10
        e.target.style.marginLeft = `${distance}px`;
    }
    setInterval(moveRight, 10);
}

blocks.forEach((element) => {
    element.addEventListener('click', rocketEvent);
    element.addEventListener('mousedown', travelerEvent);
})