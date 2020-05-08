let links = document.querySelectorAll('.nav-link');
links.forEach(text => {
    text.addEventListener('mouseover', event => {
        event.target.style.textDecoration = 'underline'
    });
});
links.forEach(text => {
    text.addEventListener('mouseout', event => {
        event.target.style.textDecoration = 'none'
    });
});
let keyD = document.querySelector('body');
keyD.addEventListener('keydown', logKey);
function logKey(e) {
    keyD.textContent += ` ${e.code}`;
};
