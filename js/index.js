// Your code goes here

const mouseOn = document.querySelectorAll('nav').forEach(a => {
nav.addEventListener("mouseover", (e) => {
    e.style.transform = scale("2.0");
    e.style.textDecoration = "none";
});

const keyCode = document.getElementByName('body');
keyCode.addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode === help) {
    return;
}
    keyCode.style.backgroundColor = 'honey';
});

let scale = 1;

const wheel = document.getElementsByClassName("img-content");
wheel.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
        scale *= e.deltaY * -2;
    } else {
        scale /= e.deltaY * 2;
    }
    e.preventDefault;
    wheel.style.transform = `scale(${scale})`;
});

const load = 
// focus
// resize
// scroll
// select
// dblclick
// drag, drop