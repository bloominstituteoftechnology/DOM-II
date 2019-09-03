// Your code goes here

// Mouseover bus image grows in size
const imgScale = document.querySelector('img');
imgScale.addEventListener("mouseover", e => {
    imgScale.style.transform = 'scale(1.5)';
});

// Zoom with mouse wheel on header
function zoom(event) {
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('header');
el.onwheel = zoom;

// Blur footer
// const textBlur = document.querySelector('footer[type="textBlur"]');
//     textBlur.addEventListener('focusout', e => {
//         footer.target.style.background = 'purple';
//     });

// Change first non-header image
const newBus = document.querySelectorAll('.lets-go');
newBus.forEach(item => {
    item.addEventListener('click', e => {
    item.src= 'https://images.unsplash.com/photo-1525962898597-a4ae6402826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
    item.alt ="New Bus"
    })
});

// Change text in footer
window.addEventListener('resize', e => {
    const changeTitle = document.querySelector('.footer');
    changeTitle.textContent="*A sham of a company"
});

// Change color when clicking on first <p>
window.onclick = changeColor;
function changeColor() {
    document.getElementsByTagName("p")[0].style.backgroundColor = "purple";
};

// Change color to green when clicken on Pick Your Destination
const destinationColor = document.querySelector('.content-destination');
destinationColor.addEventListener('click', (e) => {
    destinationColor.style.background = "green";
});

// Double click on Island Getaway to large
const cardLarge = document.querySelector('aside');
cardLarge.addEventListener('dblclick', e => {
    cardLarge.classList.toggle('large');
    e.preventDefault();
});

// Changes Adventure Awaits when window change
window.addEventListener('resize', e => {
    const changeContent = document.querySelector('.adventure');
    changeContent.textContent="You Too Could Drown Here"
});

// Changes color to pink when clicking on Fun In The Sun
const lowerColor = document.querySelector('.destination')
lowerColor.addEventListener('click', (e) => {
    lowerColor.style.color = "pink";
    e.stopPropagation();
});