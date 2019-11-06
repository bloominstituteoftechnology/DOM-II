// Your code goes here
const mainbar= document.querySelector('.main-navigation');

mainbar.addEventListener("mouseover", () => {
    mainbar.style.transform="scale(1.2)";
    mainbar.style.transition="all 0.3s";

});

mainbar.addEventListener("dblclick", () => {
    mainbar.style.transform="scale(1.0)";
});

const topimage= document.querySelectorAll('.img-content')[0];

topimage.addEventListener("load", () => {
    topimage.style.backgroundColor = "pink"; 
});

const top_text= document.querySelector('.intro');

top_text.addEventListener("select", () => {
    top_text.style.backgroundColor = "grey"; 
});

const mid_text= document.querySelector('.content-destination');

mid_text.addEventListener("keydown", () => {
    mid_text.style.color = "grey"; 
});

window.addEventListener('scroll', () => {
    console.log(scrolled);
})

const letsGoText = document.querySelector('.text-content p');
const letsGo = document.querySelector('#lets-go');
letsGo.addEventListener("drag", () => {
    letsGoText.style.border = "2px solid black";
    letsGoText.style.textAlign = "center";
});


const btn1 = document.querySelectorAll('.destination .btn');
btn1.forEach(function (btn2) {
    btn2.addEventListener("wheel", (e) => {
        e.target.style.color = "black";
        e.target.style.background = "grey";
        e.target.style.borderRadius = "0px";
    });
});

