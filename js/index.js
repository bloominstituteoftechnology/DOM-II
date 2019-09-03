// Your code goes here

// Mouseover bus image grows in size
const imgScale = document.querySelector('img');
imgScale.addEventListener("mouseover", e => {
    imgScale.style.transform = 'scale(1.5)';
});

// Zoom with mouse wheel on header
function zoom(event) {
    event.preventDefault()
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('header');
el.onwheel = zoom;

const textBlur = document.querySelector('footer[type="textBlur"]');
    textBlur.addEventListener('focusout', e => {
        footer.target.style.background = 'purple';
    });

const newBus = document.querySelectorAll('.img-content');
newBus.forEach(item => {
    item.addEventListener('click', e => {
    item.src= 'https://images.unsplash.com/photo-1525962898597-a4ae6402826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
    item.alt ="New Bus"
    })
})
