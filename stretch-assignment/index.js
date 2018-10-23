
const blocks = document.querySelector('.blocks');
blocks.addEventListener('click', (event) => {
    const clickColor = event.target.classList[1];
    const topColor = blocks.children[0].classList[1];
    event.target.classList.toggle(`${clickColor}`);
    event.target.classList.toggle(`${topColor}`);
    blocks.children[0].classList.toggle(`${topColor}`);
    blocks.children[0].classList.toggle(`${clickColor}`)    
})