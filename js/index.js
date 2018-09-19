// Your code goes here

let funTitle = document.querySelector('h1');
funTitle.addEventListener('mouseover', (e) => {
    event.target.style.color = 'purple';
})

document.addEventListener('keydown', (e) => {
    let aKey = event.key;
    if(aKey === 'a'|| aKey === 'A'){
        alert(`Whoa dude, you can\'t just go around pressing buttons like:\n ${aKey}\n Were you trying to spell Ambitious? Cause you are!`)
    }
})

let nav = document.querySelector('.nav');
nav.addEventListener('focus', (event) => {
    event.target.style.color = 'pink';
    event.target.style.fontSize = '3rem';
}, true);
nav.addEventListener('blur', (event) => {
   event.target.style.fontSize = '';
}, true);



let dragged = document.querySelector('img');
dragged.addEventListener('mouseover', (event) => {
    event.target.style.cursor = 'none';
});

document.addEventListener('drag', (event) => {
});
document.addEventListener('dragstart', (event) => {
    dragged = event.target;
    event.target.style.opacity = .2;
});
document.addEventListener('dragend', (event) => {
    event.target.style.opacity = '';
});
document.addEventListener('dragenter', (event) => {
    if (event.target.className === 'picDrop'){
        event.target.style.background = 'pink';
    }
}, false);
document.addEventListener('dragleave', (event) => {
    if (event.target.className === 'picDrop'){
        event.target.style.background = '';
    }
})
document.addEventListener('drop', (event) => {
    if (event.target.className === 'picDrop'){
        event.target.appendChild(dragged);
    }
});



let aTags = document.querySelectorAll('a');
aTags.addEventListener("click", (event) => {
    event.preventDefault();
})