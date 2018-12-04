let red = document.querySelector('.block--red');
let blue = document.querySelector('.block--blue');
let green = document.querySelector('.block--green');
let pink = document.querySelector('.block--pink');
let gray = document.querySelector('.block--gray');
let blocks = document.querySelectorAll('.block');

let neg = 0;
blocks.forEach(b => {
    b.style.marginLeft = '0px';
    let interval;
    b.addEventListener('click', (e) => {
        neg -= 1;
        TweenMax.to(e.target, 0.25, {order: `${neg}`});
    });

    b.addEventListener('mousedown', (e) => {
        e.target.dataset.flying = 'true';
        interval = setInterval(function() {
            let current = Number(b.style.marginLeft.split('px')[0]);
            let newMargin = current + 1;
            TweenMax.to(e.target, 0.001, {marginLeft: `${newMargin}px`});
        }, 10);
    });
    b.addEventListener('mouseup', (e) => {
        e.target.dataset.flying = 'false';
        clearInterval(interval);
    });
    b.addEventListener('mouseleave', (e) => {
        e.target.dataset.flying = 'false';
        clearInterval(interval);
    });
});