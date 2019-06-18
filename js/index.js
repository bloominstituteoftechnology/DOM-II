// Your code goes here
const rotating = document.querySelector(".img-content");
console.log(rotating);
rotating.addEventListener("click", event => {
    event.target.style.border = "5px solid red";
})


document.addEventListener("keydown", event => {
    alert("Caution: You've pressed a key!");
})

// const mouseOne = document.querySelector(".btn");

//from CodePen:

// function zoom(event) {
//     event.preventDefault();
    
//     scale += event.deltaY * -0.01;
    
//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);
    
//     // Apply scale transform
//     zoompic.style.transform = `scale(${scale})`;
// }
    
//     let scale = 2;
//     zoompic.onwheel = zoom;

const zoompic = document.querySelector('.intro');
zoompic.addEventListener("mouseover", event => {
   event.target.style.background = "blue";
   event.target.style.transition = "3s";
})

const down = document.querySelector('.destinationpic');
down.addEventListener("mousedown", event => {
    event.target.style.padding = "20px";
})



