let blocks = document.querySelectorAll(".block");

blocks.forEach(el => el.addEventListener("click", event => {
    let tmp = blocks[0].className;
    blocks[0].className = event.target.className;
    event.target.className = tmp;
}));