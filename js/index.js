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
    link.addEventListener("mouseenter", e => {
        e.target.style.color = "red";
    });
    link.addEventListener("mouseleave", e => {
        e.target.style.color = "black";
    });
});