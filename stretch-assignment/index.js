/* index.js for the stretch assignment */

let blocks = document.querySelectorAll('.blocks .block');

blocks.forEach(block => {
    // click block to move it to the top (of its column)
    block.addEventListener('click', e => {
        document.querySelector('.blocks').prepend(e.target);
    });
    
    let i = 0;

    // move right on left click
    block.addEventListener('mousedown', e => {
        const moveRight = setInterval(() => {
            i++;
            e.target.style['margin-left'] = `${i}px`;
            if (i > 500) clearInterval(moveRight);
        }, 10);

        e.target.addEventListener('mouseup', () => {
            clearInterval(moveRight);
        });
    });

    // return left on release of left click
    block.addEventListener('mouseup', e => { 
        const moveLeft = setInterval(() => {
            i--;
            e.target.style['margin-left'] = `${i}px`;
            if (i < 11) clearInterval(moveLeft);
        }, 10);

        e.target.addEventListener('mousedown', () => {
            clearInterval(moveRight);
        });
    });
});