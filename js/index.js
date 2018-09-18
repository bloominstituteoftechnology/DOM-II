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



// keydown
const randomRGB = () => Math.floor(Math.random() * Math.floor(255));
document.querySelector('body').addEventListener('keydown', e => {
    e.target.style.background = `rgba(${randomRGB()},${randomRGB()},${randomRGB()},0.1)`
});


//wheel

let content = document.querySelectorAll('.home > *');
content.forEach((n, i) => {
    if(i === 0 || i === 1){return}
    n.style.transform = 'translateY(1000px)';
    // n.style.transition = 'all 1500ms ease-in-out';
});

document.querySelector('body').addEventListener('wheel', e => {
    console.log(e.pageY);

    if(e.pageY >= 300){
        content[2].style.transition = 'all 1500ms ease-in-out';
        content[2].style.transform = 'translateY(0px)';
    }
    if(e.pageY >= 900){
        content[3].style.transition = 'all 1500ms ease-in-out';
        content[3].style.transform = 'translateY(0px)';
    }
    if(e.pageY >= 1250){
        content[4].style.transition = 'all 1500ms ease-in-out';
        content[4].style.transform = 'translateY(0px)';
    }
});