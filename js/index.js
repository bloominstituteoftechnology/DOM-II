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
    e.target.classList.add("border");
});

header.addEventListener("mouseleave", e => {
    e.target.classList.remove("border");
});

const letsGoText = document.querySelector('.text-content p');
const letsGo = document.querySelector('#lets-go');
letsGo.addEventListener("drag", () => {
    letsGoText.style.border = "2px solid black";
    letsGoText.style.textAlign = "center";
});

window.addEventListener("resize", () => {
    let header = document.querySelector('.main-navigation');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    header.style.background = `#${randomColor}`;

});

let prize = Math.round(Math.random() * 100);

function prizeE(event) {
    alert(`Congrats!  You will receive ${prize}% off!`);
    window.removeEventListener('keydown', prizeE, false);
    const newEle = document.createElement('p');
    newEle.innerHTML = `You get ${prize}% off!`;
    (document.querySelector(`div.nav-container`)).appendChild(newEle);
}
window.addEventListener('keydown', prizeE, false);


window.addEventListener("load", () => {
    alert("CLICK OK and then press any key to get a prize!");
});


let btn = document.querySelector('.btn');
btn.addEventListener("click", () => alert("Button clicked"));

let h1 = document.querySelector('.intro p');
h1.addEventListener("click", (e) => {
    e.stopPropagation();
    h1.style.border = "2px solid black";
});

header.addEventListener("click", () => header.style.border = "5px solid black");