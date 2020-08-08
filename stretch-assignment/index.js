const rocket = document.querySelectorAll('.block');
// console.log(rocket);

const moveToTop = (e) => {
    const colorRocket = e.target.parentNode;
    colorRocket.prepend(e.target);
}

rocket.forEach(block => {
    block.addEventListener('click', moveToTop)
});