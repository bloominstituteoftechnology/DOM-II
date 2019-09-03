// Your code goes here

// mouseover

document.querySelector('h1').addEventListener('mouseover', (e) => {
    return e.target.textContent = 'FUN BUS';
});

// keydown

document.querySelector('body').addEventListener('keydown', (e) => {
    return e.target.style = 'background: lightgrey;';
});

// wheel

document.querySelector('body').addEventListener('wheel', (e) => {
    return e.target.style = 'background: grey;';
});

// drag / drop

document.querySelectorAll('img').forEach(
    item => item.addEventListener(
        'drag', (e) => {
            return e.target.style = 'transform: rotate(180deg);';
        }
    )
);

// load

window.addEventListener('load', (e) => {
    console.log('Page is loaded');
});

// focus



// resize

window.addEventListener('resize', (e) => console.log('Window was resized to', e.currentTarget.innerHeight, 'x', e.currentTarget.innerWidth));

// scroll

window.addEventListener('scroll', (e) => console.log('Window was scrolled!'));

// select
// dblclick