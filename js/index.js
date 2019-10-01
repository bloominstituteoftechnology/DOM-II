// Your code goes here

const changeImg = document.querySelector('h1');
changeImg.addEventListener("dblclick", () => {
    changeImg.style.textTransform = "lowercase"

})

const focusImg = document.querySelector('img');
focusImg.addEventListener("mouseenter", () => {
    focusImg.style.transform = "scale(1.9)"

    focusImg.addEventListener("mouseleave", () => {
        focusImg.style.transform = "scale(1)"
    })
})

const navFocus = document.querySelector("a")
navFocus.addEventListener("mouseover", () => {
    navFocus.style.textTransform = "lowercase"

})

const imageScale = document.querySelectorAll('.img-content')

imageScale.forEach((image) => {
    image.addEventListener("click", () => {
        image.style.transform = "scale(1.9)"
        image.stlye.transition = "transform 0.5s"
    });

    image.addEventListener("wheel", () => {
        image.style.transform = "scale(1)"
        image.stlye.transition = "transform 0.5s"
    });
});

const buttonSpin = document.querySelectorAll('.btn')

buttonSpin.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(1.9)"
        button.stlye.transition = "transform 0.5s"
    });
})

const log = document.querySelector('.destination');

document.addEventListener('keypress', logKey);

function logKey(e) {
    log.textContent += ` ${e.key}`;
}

window.addEventListener('load', () => {
    console.log('page is fully loaded');
});

const home = document.querySelector('body')
home.addEventListener('dblclick', e => {
    e.target.style.backgroundColor = 'blue'
    e.stopPropagation();
})

const stopLink = document.querySelector("nav");

stopLink.addEventListener("click", (event) => {
    console.log("stopped link");

    event.preventDefault();
})