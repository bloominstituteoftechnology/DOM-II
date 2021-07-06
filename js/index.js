// Your code goes here
const headers = document.querySelectorAll("header");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("a");
headers.forEach(header => {
    // 1
    header.addEventListener("mouseenter", () => {
        header.style.color = "pink"
        header.style.backgroundColor = "white"
    })
    // 2
    header.addEventListener("mouseleave", () => {
        header.style.backgroundColor = "pink"
        header.style.color = "white"
    })
    // 3
    header.addEventListener("dblclick", () => {
        header.style.fontSize = "20px"
    })
})
links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
    })
})
// 4
nav.addEventListener("dblclick", (event) => {
    event.stopPropagation()
})
nav.addEventListener("click", () => {
    nav.style.padding = "10px"
})
const titles = document.querySelectorAll("h2");
titles.forEach(title => {
    title.draggable = true;
    const defaultText = title.innerText;
    // 5
    title.addEventListener("dragstart", () => {
        title.innerText = "I am being dragged!!"
    })
    // 6
    title.addEventListener("dragend", () => {
        title.innerText = defaultText;
    })
    // 7
    title.addEventListener("dragleave", (event) => {
        title.innerText = event.target.innerText;
        console.log(event.target)
    })
})
const body = document.querySelector("body")
// 8
window.addEventListener("resize", () => {
    console.log("test?")
    body.style.backgroundColor = "black";
    body.style.color = "white";
})
// 9
window.addEventListener("scroll", () => {
    body.style.width = "50%"
})
// 10
window.addEventListener("wheel", () => {
    body.style.fontWeight = "900";
})