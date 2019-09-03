// Your code goes here
const imgScale = document.querySelector('img');
imgScale.addEventListener("mouseover", e => {
    imgScale.style.transform = 'scale(1.5)';
});

function zoom(event) {
    // event.preventDefault()
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('header');
el.onwheel = zoom;