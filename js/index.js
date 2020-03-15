// Your code goes here

// const pageCheck = document.querySelector("html")
// pageCheck.style.background = "red"

const headImg = document.querySelector("h1");
headImg.addEventListener("mouseenter", () => {
    headImg.style.transform = "scale(1.2)"
    headImg.style.transform = "all 0.3s"
});

headImg.addEventListener("mouseleave", () => {
    headImg.style.transform = "scale(1)"
    headImg.style.transform = "all 0.3s"
});

const sizeChange = document.querySelector("html")
window.addEventListener("resize", () => {
    sizeChange.style.background = "teal"
})

// const newPara = document.querySelector("html")
// newPara.classList.add("")

document.addEventListener('keydown', logKey);
function logKey(e) {
    log.textContent += ` ${e.code}`;
}

// Google researched
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".nav-link");
el.onwheel = zoom;

const picMagic = document.querySelector("img")
picMagic.addEventListener("dblclick", () => {
    picMagic.style.display = "none"
});

const fontColor = document.querySelectorAll("h2")
const onClick = event => event.target.style.color = "red"
fontColor.forEach(text => {
    text.addEventListener("click", onClick)
});

const mini = document.querySelector(".img-content")
mini.addEventListener("click", ()=> {
    mini.style.transform = "scale(0.5)"
    mini.style.transform = "all 0.5s"
})

const disappear = document.querySelector(".footer")
disappear.addEventListener("click", () => {
    disappear.style.display = "none"
})

// const pageName = document.querySelector("h1")
// pageName.addEventListener("click", () => {
//     pageName.style.color = "black"
// })

const page = document.querySelector("body")
page.addEventListener("click", () => {
    page.style.backgroundColor = "dodgerblue"
})

const chars = document.querySelector(".home")
chars.addEventListener("click", () => {
    chars.style.color = "white"
    event.stopPropagation()
})

