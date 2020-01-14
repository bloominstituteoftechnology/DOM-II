// Your code goes here
document.querySelector('a').addEventListener('mousedown', mouseDown);
document.querySelector('a').addEventListener('mouseup', mouseUp);
function mouseDown() {
    document.querySelector('a').innerHTML = "Click Me!";
}
function mouseUp() {
    document.querySelector('a').innerHTML = "Unclick Me";
}

const schoolBus = document.querySelector(".img-content");
schoolBus.addEventListener("mouseenter", function() {
  schoolBus.style.transform = "scale(1.5)";
})
schoolBus.addEventListener("mouseleave", function() {
    schoolBusS.style.transform = "scale(1)"
  });

const titleH1 = document.querySelector("h1");
titleH1.addEventListener("click", (event) => {
    titleH1.style.transform = "rotateY(-360deg)";
    titleH1.style.transitionDuration = "1000ms";
});
const btn = document.querySelector('.btn1')
btn.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red'
});
const newBtn = document.querySelector('.btn2')
newBtn.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green'
});
const newBtn2 = document.querySelector('.btn3')
newBtn2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'pink'
});