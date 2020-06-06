// Your code goes here
//1. mouseenter
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headings.forEach(ele => ele.addEventListener('mouseenter', () => {
    ele.style = 'font-family: Roboto, sans-serif';
}));

//2. mouseleave
headings.forEach(ele => ele.addEventListener('mouseleave', () => {
    ele.style = 'font-family: Indie Flower, cursive';
}));

//3. dblclick
const images = document.querySelectorAll('img');
images.forEach(ele => ele.addEventListener('dblclick', () => {
    let styleTransform = ele.getAttribute('style');
    if (styleTransform === 'transform: scaleX(-1);') {
        ele.style = 'transform: scaleX(1)'
    } else {
        ele.style = 'transform: scaleX(-1)';
    }
}));

//4. click
const body = document.querySelector('body');
body.addEventListener('click', () => {
    body.style.color = 'red';
});

const textContent = document.querySelector('.text-content');
textContent.addEventListener('click', (e) => {
    textContent.style.color = 'cyan';
    e.stopPropagation();
});

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(ele => ele.addEventListener('click', (e) => {
    e.preventDefault;
}));

//5. wheel
body.addEventListener('wheel', () => {
    body.style.textTransform = 'uppercase';
});

//6. contextmenu
body.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

//7. mousedown
const button = document.querySelector('.btn');
button.addEventListener('mousedown', () => {
    button.textContent = 'Clicked!';
});

//8. keydown
body.addEventListener('keydown', () => {
    body.style.backgroundColor = 'black';
});

//9. keyup
body.addEventListener('keyup', () => {
    body.style.backgroundColor = 'white';
});

//10. auxclixk
textContent.addEventListener('auxclick', () => {
    textContent.style.textTransform = 'capitalize';
});