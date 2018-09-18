// Your code goes here

// pointerover + pointerout + prevent default
document.querySelectorAll('nav > a').forEach(n => {
    n.addEventListener('click', e => {
        e.preventDefault();
    });
    n.addEventListener('pointerover', e => {
        e.target.style.transition = 'all 100ms ease-in-out'
        e.target.style.transform = 'scale(1.1)';
    });
    n.addEventListener('pointerout', e => {
        e.target.style.transition = 'all 100ms ease-in-out'
        e.target.style.transform = 'scale(1.0)';
    });
});

// doubleclick + click + preventing event propagation
document.querySelectorAll('.btn').forEach(n => {
    n.addEventListener('click', e => {
        e.stopPropagation();
        console.log('button clicked')
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transition = 'all 100ms ease-in-out'
            e.target.style.transform = 'scale(1)';
        }, 100)
    });

    n.addEventListener('dblclick', e => {
        e.target.parentNode.classList.toggle('hidden');
        e.target.classList.toggle('visible');
    });
});

document.querySelectorAll('.content-pick > *').forEach(n => {
    n.addEventListener('click', e => {
        console.log('event clicked')
    });
});

const randomRGB = () => Math.floor(Math.random() * Math.floor(255));


// keydown
document.querySelector('body').addEventListener('keydown', e => {
    e.target.style.background = `rgba(${randomRGB()},${randomRGB()},${randomRGB()},0.1)`
});
