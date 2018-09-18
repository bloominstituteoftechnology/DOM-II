// Your code goes here
const link = document.querySelector("nav");
const contentSection = document.querySelector(".content-section");
const button = document.querySelectorAll(".btn");
const destination = document.querySelectorAll(".destination");
const introIMG = document.querySelector("img");

window.addEventListener("load", (event) => {
    TweenLite.to(".logo-heading", 5, {
        x: 200,
    });
});

window.addEventListener("load", (event) => {
    TweenLite.to(".nav", 5, {
        x: -100,
    });
});

window.addEventListener("keydown", (event) => {
    TweenLite.to("img", 5, {
        opacity: 0,
    });
});

window.addEventListener("wheel", (event) => {
    TweenLite.to("img", 1, {
        opacity: 100,
    })
});

window.addEventListener("resize", (event) => {
    TweenLite.to(".logo-heading", 5, {
        x: -10,
    });
    TweenLite.to(".nav", 5, {
        x: 25,
    });
});

link.addEventListener("dblclick", (event) => {
    TweenLite.to(".nav a", 3, {
        rotation: 360,
    })
});

link.addEventListener("click", (event) => {
    event.preventDefault();
});


window.addEventListener("scroll", (event) => {
    TweenLite.to("h2", 1, {
        "font-size": "4rem",
    })
});

contentSection.addEventListener("mouseover", (event) => {
    TweenLite.to(".text-content p", 10, {
        color: "#E59246",
    })
});

button[0].addEventListener("click", (event) => {
    event.stopPropagation();
    destination[1].innerHTML = destination[0].innerHTML;
    destination[2].innerHTML = destination[0].innerHTML;
});

button[1].addEventListener("click", (event) => {
    destination[0].innerHTML = destination[1].innerHTML;
    destination[2].innerHTML = destination[1].innerHTML;
});

button[2].addEventListener("click", (event) => {
    destination[0].innerHTML = destination[2].innerHTML;
    destination[1].innerHTML = destination[2].innerHTML;
});


destination[0].addEventListener("click", (event) => {
    console.log("Don't click that!");
});

introIMG.addEventListener("mouseleave", (event) => {
    TweenLite.to(introIMG, 1, {
        rotation: 360,
    })
});

window.addEventListener("visibilitychange", (event) => {
    TweenLite.to(introIMG, 3, {
        x: 1500,
    })
});