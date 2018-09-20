// Your code goes here
const btns = document.querySelectorAll('.destination .btn');
btns.forEach(function (btn) {
    btn.addEventListener("mouseover", (e) => {
        e.target.style.color = "black";
        e.target.style.background = "white";
        e.target.style.borderRadius = "0px";
    });
});

const navlink = document.querySelectorAll('a.nav-link');
navlink.forEach(link => {
    link.addEventListener("click", e => e.preventDefault());
    link.addEventListener("dblclick", e => {
        e.preventDefault();
        e.target.classList.toggle("red");
    });
});

const h2 = document.querySelectorAll('h2');
h2.forEach(h => {
    document.querySelector('body').addEventListener("wheel", e => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        h.style.color = `#${randomColor}`;
    });
});

const header = document.querySelector('.intro');
header.addEventListener("mouseenter", e => {
    e.target.classList.add("hide");
});

header.addEventListener("mouseleave", e => {
    e.target.classList.remove("hide");
});