// Your code goes here

// const atag = document.querySelectorAll(".nav-link");
// atag.forEach(item => item.addEventListener('mouseover', function(event){
//     event.target.style.color = "blue";
//     setTimeout(function() {
//         event.target.style.color = "";
//       }, 500)
//     }, false)
// );

const atag = document.querySelectorAll(".nav-link");
atag.forEach(item => item.addEventListener('mouseover', function(event){event.target.style.color = "blue"}));

atag.forEach(item => item.addEventListener('mouseout', function(event){event.target.style.color = ""}));

const button = document.querySelectorAll(".btn");
button.forEach(item => item.addEventListener("click", function (event) {
    window.confirm("No more spaces available");
}));


document.addEventListener("keydown", function (event) {
    if (event.key === "Escape"){
        button.classList.add("off");
    }
});

button.forEach(item => item.addEventListener('contextmenu', function(event) {
    event.preventDefault();
}));

const dubclick = document.querySelector(".content-destination");
dubclick.addEventListener("dblclick", function (event){
    dubclick.classList.toggle('.large');
});

atag.forEach(item => item.addEventListener('focus', function(event) {
    event.target.style.background = 'yellow';
}));

atag.forEach(item => item.addEventListener('blur', function(event) {
    event.target.style.background = '';
}));

window.addEventListener('online', function(event){
    window.alert("You are connected to the internet");
});

const box = document.querySelector(".container-home .intro");
box.addEventListener('wheel', function (event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    box.style.transform = `scale(${scale})`;
});