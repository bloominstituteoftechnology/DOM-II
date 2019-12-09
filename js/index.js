// mouseover
const mouse = document.querySelector('.nav');
mouse.addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';
    setTimeout((event) => {
        event.target.style.color = "";
    }, '500');
}, false);

// keydown
const keyboardKey = document.querySelectorAll('p');
keyboardKey[1].addEventListener('keydown', (event) => {
    event.target.style.color = 'red';
});

//focus
const focusNav = document.querySelector('.nav a');
focusNav.addEventListener('focus', (event) => {
    event.target.style.color = 'red';
})

// focusNav.forEach(navItems => {
//     navItems.addEventListener('focus', (event) => {
//         event.target.style.background = 'red';
//     })
// })

// dblclick
const imagesClicked = document.querySelectorAll('content-destination');
imagesClicked.addEventListener('dblclick', () => {
    console.log('image is double clicked.');
});

// resize
// const reSize = document.querySelector('body');
// reSize.addEventListener('resize', (event) => {
//     event.target
// })

// load
// window.addEventListener('load', () => {
//     console.log('Page is loaded.')
// });

window.onload = (event) => {
    console.log('page is fully loaded');
};

document.querySelectorAll('h2').forEach((wali) => {
    wali.addEventListener('click', () => {
        wali.style.color = '#d6cd1a';
    })
})

const mirage = document.querySelector('.intro img');
mirage.addEventListener('mouseenter', () => {
    mirage.style.transform = 'scale(1.1)';
    mirage.style.transition = 'all 0, 0.1s';
})


mirage.addEventListener('mouseleave', () => {
    mirage.style.transform = 'scale(1.0)';
    zoomOut.style.transition = 'all 0, 0.11s';
})

