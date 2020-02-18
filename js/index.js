// Your code goes here

// Created internal style tag in header for keyframe use
const head = document.querySelector('head');
head.appendChild(document.createElement('style'));
const style = document.querySelector('head style');
style.setAttribute('type', 'text/css');

// Copy Paste Cut variables
let clipboard;
let lastParent;

// Header Event for propagation example
const header = document.querySelector('header');
header.style.zIndex = '999';
header.addEventListener('click', () => {
    header.style.color = "pink";
})

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    // Event #1
    link.addEventListener('click', (event) => {
        link.style.color = "green";
        // Prevent Default Behavior prevents page from refreshing
        event.preventDefault();
        // Prevent Propagation prevents header event from firing
        event.stopPropagation();
    })
    // Event #2
    link.addEventListener('dblclick', () => {
        link.style.color = "purple";
    })
});


const images = document.querySelectorAll('img');
images.forEach(img => {
    // Event #3
    img.addEventListener('mouseenter', () => {
        img.style.boxShadow = "5px 10px 10px black";
    })
    // Event #4
    img.addEventListener('mouseleave', () => {
        img.style.boxShadow = "0 0 0 black";
    })

    let scale = 1;
    // Event #5
    img.addEventListener('wheel', (event) => {
        event.preventDefault();
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);

        img.style.transform = `scale(${scale})`;
    })
    // Event #6
    img.addEventListener('mousedown', () => {
        img.style.border = 'solid 2px black';
    })
    // Event #7
    img.addEventListener('mouseup', () => {
        img.style.border = "0px";
    })
});

// Event #8
window.addEventListener('scroll', () => {
    const winHeight = document.documentElement.scrollHeight - window.innerHeight;
    const yHeight = window.scrollY;

    if (Math.ceil(yHeight) > (winHeight - 150)) {
        style.textContent = '@keyframes pulse { 0% { transform: scale(1.0); } 100% { transform: scale(1.2); } } .destination h4 { animation: pulse 1.2s ease-in-out infinite alternate; } ';
    } else {
        style.textContent = '';
    }
});

// CUT COPY PASTE BEHAVIOR

// Event #9
window.addEventListener('cut', () => {
    let cut = window.getSelection();
    clipboard = cut.toString();
    let parent = cut.anchorNode.parentElement;
    if (parent.nodeName === "P") {
        parent.innerText = parent.innerText.replace(cut, '');
    }
})

// Event #10
window.addEventListener('copy', () => {
    clipboard = window.getSelection().toString();
})

// Event #11
window.addEventListener('paste', () => {
    let selection = window.getSelection();
    if (selection) {
        let parent = selection.anchorNode.parentElement;
        if (parent.nodeName === "P") {
            parent.innerText = parent.innerText.replace(selection, clipboard);
        }
    }
})


