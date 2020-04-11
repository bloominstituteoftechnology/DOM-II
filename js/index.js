// Your code goes here

// 1 & 2. mouseover and mouseout
const nav = document.querySelectorAll(".nav-link")

nav.forEach((element) => {
    element.addEventListener("mouseover", (event)=> [
        event.target.style.color = "blue"
    ]) 
});

nav.forEach((element) => {
    element.addEventListener("mouseout", (event)=> [
        event.target.style.color = "black"
    ]) 
});

// 3. keydown
const body = document.querySelector("body")

body.addEventListener("keydown", function checkKeyPress(key) {
    if (key.keyCode === 65){
        alert("The 'a' key has been pressed!")
    }
}, false);

// 4. wheel

const wheelEvent = document.querySelector(".logo-heading")

wheelEvent.addEventListener("wheel", () => {
    wheelEvent.style.transform = "rotate(360deg)"
    wheelEvent.style.transition = "transform 3s"
})

// 5. click

const buttonEvent = document.querySelectorAll(".btn")
    Array.from(buttonEvent).forEach((buttonElement) => {
        buttonElement.addEventListener("click", () => {
            buttonElement.style.backgroundColor = "red"
    })
})


// 6. dblclick

const dblclickEvent = document.querySelector(".content-destination")

dblclickEvent.addEventListener("dblclick", ()=> {
    dblclickEvent.style.backgroundColor = "purple"
})

// 7 & 8 focus and blur

const focusEvent = document.querySelector(".form")
    
focusEvent.addEventListener("focus", () => {
    focusEvent.style.backgroundColor = "red";
}, true);

focusEvent.addEventListener("blur", () => {
    focusEvent.style.backgroundColor = "";
}, true);

// 9 & 10 mouseenter and mouseleave

const mouseenterEvent = document.querySelectorAll(".destination")[2]

mouseenterEvent.addEventListener("mouseenter", () => {
    mouseenterEvent.style.transform = "scale(2)";
    mouseenterEvent.style.transition = "transform 1s";
})

mouseenterEvent.addEventListener("mouseleave", () => {
    mouseenterEvent.style.transform = "scale(1)"
})