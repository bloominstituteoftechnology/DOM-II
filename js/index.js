// Your code goes here
const get = (selector) => {
    return document.querySelector(selector)
}

//hover event
const h1Hover = get('.logo-heading');
h1Hover.addEventListener('mouseover', (hover) => {
    hover.target.style.color = 'red';

    setTimeout(function(){
        hover.target.style.color = '';
    }, 300);
    });

//keydown event
document.body.addEventListener('keydown', (bgColor) => { 
    if (bgColor.isComposing || bgColor.keyCode === 65){
       document.body.style.backgroundColor = 'dodgerblue';
    } else {
        document.body.style.backgroundColor = '';
    }
});

//mousedown event
const welcomeH2 = get('.intro h2');
welcomeH2.addEventListener('mousedown', (h2Color) => {
    welcomeH2.style.color = 'red';
});

//dblclick event
const dblColor = get('.intro p');
dblColor.addEventListener('dblclick', (pColor) => {
        dblColor.style.color = 'blue';
});

//load event
window.addEventListener('load', (alertLoad) => {
    alert('The page has loaded!');
});

//online event
window.addEventListener('online', (alertLine) => {
    alert('You are now online.');
});

//offline event
window.addEventListener('offline', (alertOffline) => {
    alert('You are now offline.');
});

//select event
const selectText = get('.content-section .text-content p');
selectText.addEventListener('select', (event) => {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    return selection.style.color = 'red';
})
