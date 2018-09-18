// Your code goes here

// 1. pointerover
// 2. pointerout
// prevent default
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

// 3. doubleclick 
// 4. click
// preventing event propagation
document.querySelectorAll('.btn').forEach(n => {
    n.addEventListener('click', e => {
        e.stopPropagation();
        // console.log('button clicked')
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



// 5. keydown 
// 6. key up
const randomRGB = () => Math.floor(Math.random() * Math.floor(255));
let body = document.querySelector('body');
body.addEventListener('keydown', e => {
    e.target.style.background = `rgba(${randomRGB()},${randomRGB()},${randomRGB()},0.1)`
});

body.addEventListener('keyup', e => {
    e.target.style.background = `white`
});


// 7. wheel
let content = document.querySelectorAll('.home > *');
content.forEach((n, i) => {
    if(i === 0 || i === 1){return}
    n.style.transform = `translateY(${window.innerHeight + 100}px)`;
    // n.style.transition = 'all 1500ms ease-in-out';
});

body.addEventListener('wheel', e => {
    // console.log(e.pageY);
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

// 8. mousemove
function randomCursor() {
    const cursors = ['n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize']
    const num = Math.floor(Math.random() * Math.floor(cursors.length - 1));
    return cursors[num];
}

body.addEventListener('mousemove', (e) => {
    e.target.style.cursor = randomCursor();

})

// 9. mouseover 
//10. mouseout
const allImages = document.querySelectorAll('img');
allImages.forEach(n => {
    n.addEventListener('mouseover', e => {
        e.target.style.filter = 'invert(100%)';
    })
    n.addEventListener('mouseout', e => {
        e.target.style.filter = 'invert(0%)';
    })

})


//Animations
setInterval(() => {
    const num = Math.floor(Math.random() * Math.floor(allImages.length - 1));
    const tl = new TimelineMax();
    tl.to(allImages[num], 0.25, {scale: 1.01, rotate: 1});
    tl.to(allImages[num], 0.25, {scale: 1.01, rotation: -1});
    tl.to(allImages[num], 0.25, {scale: 1, rotation: 0});
}, 1000)


