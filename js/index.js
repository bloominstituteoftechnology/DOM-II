// Your code goes here
 //Unique Event Listeners
  // #1
  let img = document.querySelector("header img");
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(2)";
    img.style.transition = "all 0.3s";
  });
  // #2
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(.9)";
    img.style.transition = "all 0.3s";
  });
// #3
let newImg = document.querySelector('.content-section .img-content img ');
newImg.addEventListener("click", event => {
    newImg.src = "img/treasure map.jpg";
    event.stopPropagation();
});
//#4
newImg.addEventListener("dblclick", event => {
    newImg.src = "img/adventure.jpg";
    event.stopPropagation();
});
//#5
const dontCopy = document.querySelectorAll("p");
dontCopy.forEach(para => {
  para.addEventListener("copy", () => {
    alert(`Woah! Did you make that? I don't think so. This is mine. You wouldn't steal a car would you?`);
  });
});
//#6
window.addEventListener('load', ()=>{
    alert("You have arrived at the Fun Bus Travel Agency page! Have fun!")
})
//#7
let theTag = document.querySelector(".nav-link");
theTag.addEventListener('blur', (el)=>{
theTag.style.backgroundColor = "black";
})
//#8
const optionOne = document.querySelector('.container.home .content-pick .destination .btn');
optionOne.addEventListener('click', event => {
    optionOne.style.backgroundColor = 'red'
});
//#9
let backgroundColorChange = document.querySelector(".main-navigation");
window.addEventListener("scroll", () => {
    backgroundColorChange.style.backgroundColor = "orange"
});
//#10
let clickButton = document.querySelector(".destination. .btn");
footerEvent.addEventListener('focus', (el)=>{
  event.target.style.background= "red";
})
// Prevent Default
const noRefresh = document.querySelector('.nav-link');
noRefresh.addEventListener('click', (event) => {
    event.preventDefault();
})