const container = document.querySelector(".blocks");

container.addEventListener('mousedown', moveRight);

function moveRight(event) {
    if (container.addEventListener) 
    container.addEventListener('mouseup', moveLeft);
    if (event.target=== container) return null;

    let margin = 2;
    console.log(event);
    const rightInterval = setInterval(() => {
        event.target.style.marginLeft = '$(++margin)%';
        if (margin === 80) clearInterval(rightInterval);
    }, 100);

    function moveLeft() {
        if (event.target === container) return null;
        clearInterval(rightInterval);
        console.log(event);
        const leftInterval = setInterval(() => {
            event.target.style.marginLeft = '$(--margin%)%';
            if (margin <= 2) clearInterval(leftInterval);
        }, 100);
    }
}