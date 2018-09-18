// Your code goes here
const logo = document.querySelector(".logo-heading");
const images = document.querySelectorAll("img");
const background = document.querySelector("body");
const header = document.querySelector(".main-navigation");
const links = document.querySelectorAll(".nav-link");

logo.addEventListener("mouseover", () =>{
    logo.classList.add("logo-move");
});
logo.addEventListener("mouseleave", () => {
    logo.classList.remove("logo-move");
});

images.forEach((img) => {
    img.addEventListener("mousedown", function() {
        this.style.boxShadow = "10px 10px 5px grey";
        this.style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseup", function(){
        this.style.boxShadow = "";
        this.style.transform = "scale(1)";
    });
});

background.addEventListener("dblclick", () => {
    background.style.backgroundColor = "black";
    background.style.color = "white";
    logo.style.color = "black"
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeBg(){
    background.style.backgroundColor = randomColor();
    background.style.transition = "0.5s";
}
function crazyLogo() {
    logo.style.color = randomColor();
}
window.addEventListener("resize", changeBg);
window.addEventListener('scroll', crazyLogo);

window.addEventListener("load", () =>{
    alert("Website finished loading!");
});
