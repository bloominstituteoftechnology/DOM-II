// Your code goes here
const topSpace = document.querySelector("header");
const headers = document.querySelectorAll("h2");
const background = document.querySelector("body");
const paragraphs = document.querySelector("p");
const navigation = document.querySelector("nav");

//header changes color on hover over
topSpace.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "dodgerblue";
});

//on any keydown fontSize doubles
for (let i = 0; i < headers.length; i++){
    document.addEventListener("keydown", () => {
    headers[i].style.fontSize = "4rem";
    })
};

//when wheel rows these styles activate
background.addEventListener("wheel", (event) => {
    event.target.style.backgroundColor = "aquamarine";
});

//when window loads sends notification
window.addEventListener('load', (event) => {
    alert('page has loaded');
});

//when you focus on buttons they change colors/bgColors
topSpace.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'pink';    
});

//scroll makes p tags turn purple
for (let i = 0; i < paragraphs.length; i++){
    paragraphs.addEventListener("scroll", (event) => {
    event.target.style.color = "purple";
    })
};

//on dblclick of nav links the background turns green
navigation.addEventListener("dblclick", (event) => {
    event.target.style.backgroundColor = "green";
});