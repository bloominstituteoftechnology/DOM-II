// Your code goes here
let count = 0;
window.addEventListener('load', () => {
    alert('The page has successfully loaded!'); // Load
});

window.addEventListener('online', () => {
    console.log('Server is online...'); // Online
});

let h2s = document.querySelectorAll('h2');
window.addEventListener('keydown', () => { //Keydown
    h2s.forEach(item => {
        item.classList.toggle('h2s-display-none');
    });
}, false);

let anchors = document.querySelectorAll('a');
window.addEventListener('keyup', () => { // Keyup
    anchors.forEach(item => {
        item.classList.toggle('anchors-bold');
    });
}, false);

anchors.forEach(element => { // Focus
    element.addEventListener('focus', () => {
        element.classList.add('anchors-aqua');
    });
});

let imgs = document.querySelectorAll('img');
imgs.forEach(img => { // Mouseenter
    img.addEventListener('mouseenter', () => {
        img.classList.add('img-border');
    });
});

imgs.forEach(img => { // Mouseleave
    img.addEventListener('mouseleave', () => {
        img.classList.remove('img-border');
    });
});

let h1 = document.querySelector('h1');
h1.addEventListener('click', () => { // Click
    if (h1.innerHTML == 'Fun Bus') {
        h1.innerHTML = 'suB nuF';
    } else {
        h1.innerHTML = 'Fun Bus';
    }
});

h1.addEventListener('dblclick', () => { // DblClick
    h1.innerHTML = 'John Spraul for President';
});

anchors.forEach(element => {
    element.addEventListener('drag', () => { // Drag
        console.log('drag');
    });
});

let div = document.createElement('div');
let p = document.createElement('p');
div.style.textAlign = 'center';
p.style.fontSize = '45px';
div.appendChild(p);
document.body.appendChild(div);
window.addEventListener('click', () => {
    count++;
    p.style.fontWeight = 'bold';
    p.innerHTML = count;
}); // Adding a div and paragraph 
    // Adding an event listener that increments a count
    // when clicked and adds it to the paragraph
