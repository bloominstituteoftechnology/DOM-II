/* index.js for the stretch assignment */

// Selectors

let blocks = document.querySelectorAll('.blocks .block');

blocks.forEach(block => {
    block.addEventListener('click', e => {
        document.querySelector('.blocks').prepend(e.target);
    });
});