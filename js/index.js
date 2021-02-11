// Your code goes here
let headerTitle = document.querySelector('h1');
let images = document.querySelectorAll('img');
let body = document.querySelector('body');
let secTitle = document.querySelectorAll('h2');
const navLink = document.querySelectorAll('.nav-link')

headerTitle.addEventListener('click', e => {
    event.target.style.backgroundColor = "blue";
});

images.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        console.log("For some reason I cannot style these pictures so instead I am letting you know through the console.log command that the mouse has entered this picture.");
    });
    element.addEventListener('mouseleave', (e) =>{
        console.log("Now, the mouse has left this image!");
    });
});

body.addEventListener('keydown', e => {
    event.target.style.backgroundColor = "black";
});

body.addEventListener('contextmenu', e => {
    event.target.style.backgroundColor = "red";
});

body.addEventListener('keyup', e => {
    event.target.style.backgroundColor = "white";
});

body.addEventListener('select', e => {
    event.target.style.backgroundColor = "yellow";
});

secTitle.forEach(element => {
    element.addEventListener('wheel', e => {
        element.style.color = "green";
    });
    element.addEventListener('mouseover', e => {
        element.style.fontSize = "100px";
    });
    element.addEventListener('dblclick', e => {
        element.style.backgroundColor = "orange";
    });
});

navLink.forEach(navigation => {
    navigation.addEventListener('click', (event) => {
        event.preventDefault()
    });
});
