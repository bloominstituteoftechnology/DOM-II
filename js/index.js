

//== Ten Random Events =========================================================

//-- 1: dblclick ---------------------------------
document.body.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = '4rem';
    setTimeout(() => {event.target.style.fontSize = 'unset';},1000);
    console.log('Current: '+event.currentTarget.tagName);
});

//-- 2: load, 3: click ---------------------------

document.querySelectorAll('img').forEach(element => {
    element.addEventListener('load', (event) => {
        element.style.filter = 'invert(1)';
        element.style.transition = 'filter 1s ease';
    });
    element.addEventListener('click', (event) => {
        element.style.filter = 'unset';
    });
});
