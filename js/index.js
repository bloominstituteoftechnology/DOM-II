// Your code goes here

// mouseover
// const nav = document.querySelector("nav");
// Array.from(nav.children).forEach(child => {
//     child.addEventListener("mouseover", function() {
//         // child.style.textContent = child.style.textContent.toUpperCase();
//         child.style.transform = "scale(1.2)"
//     })
// })

// keydown
// document.addEventListener("keydown", (e) => {
//     const footer = document.querySelector("footer");
//     const spanKeyDown = document.createElement("span");
//     spanKeyDown.textContent = e.keyCode;
//     footer.appendChild(spanKeyDown);
// });

// wheel
// function zoom(e) {
//     e.preventDefault();
//     scale += e.deltaY * -0.01;

//     scale = Math.min(Math.max(.125, scale), 4);

//     heading.style.transform = `scale(${scale})`;
// }

// let scale = 1;
// const heading = document.querySelector(".nav-container");
// heading.onwheel = zoom;

// load
// const busImgContainer = document.querySelector(".intro");
// busImgContainer.children[0].addEventListener("load", function() {
//     busImgContainer.children[0].style.transform = "scale(0.6)";
// })

// focus
// const inputEl = document.createElement("input");
// inputEl.value = "Insert Text";
const home = document.querySelector(".home");
// home.appendChild(inputEl);

// function foc(e) {
//     e.target.style.background = "yellow";
// }
// const inputElAdded = document.querySelector(".home").children[document.querySelector(".home").children.length - 1].addEventListener("focus", foc);


// resize
// const resizeLog = document.createElement("div");
// const heightLog = document.createElement("p");
// const widthLog = document.createElement("p");
// resizeLog.appendChild(heightLog);
// resizeLog.appendChild(widthLog);
// home.appendChild(resizeLog);

// window.onresize = function() {
//     heightLog.textContent = window.innerHeight;
//     widthLog.textContent = window.innerWidth;
// }

// scroll
// document.addEventListener("scroll", (e) => {
//     document.querySelector(".logo-heading").style.fontSize = `${e.timeStamp / 1000}rem`
// });

// select
// const newEl = document.createElement("textarea");
// newEl.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ligula ut orci malesuada rhoncus. Vivamus lacinia, nibh id tempor interdum, est velit venenatis elit, vel scelerisque massa elit vitae purus. Proin lobortis consequat sem cursus vehicula. Praesent pretium, orci vitae venenatis vestibulum, purus nulla gravida leo, sit amet pellentesque magna elit non quam. Fusce sapien diam, consectetur nec dolor at, pharetra lobortis neque. Nunc mi enim, bibendum pretium arcu ut, tempor sodales neque. Proin sit amet risus interdum, venenatis mi sed, venenatis nulla. Nulla neque eros, ultricies ut blandit nec, congue sit amet dui. Nullam aliquet molestie massa vitae efficitur. Maecenas vitae posuere erat. Nam sit amet laoreet sem, id feugiat libero. Pellentesque pellentesque sit amet nibh ac laoreet. Proin nisi felis, imperdiet a felis et, consequat scelerisque sem. Integer eu lorem orci. "
// home.appendChild(newEl);
// const textarea = document.querySelector("textarea");
// textarea.addEventListener("select", function(e) {
//     const sel = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
//     const selEl = document.createElement("h2");
//     selEl.textContent = `You selected: ${sel}`;
//     home.appendChild(selEl);
// })

// dblclick
// const tar = document.addEventListener("dblclick", function(e) {
//     e.target.style.fontSize = '2rem';
// })

// drag/drop
const dragDropSection = document.querySelector(".drag-drop");
dragDropSection.style.display = "flex";
dragDropSection.style.justifyContent = "space-evenly";

const dragDiv = dragDropSection.children[0];
const dropDiv = dragDropSection.children[1];
dragDiv.style.width = "30%";
dropDiv.style.width = "30%";

Array.from(dragDropSection.children).forEach(item => {
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style.justifyContent = "center";
})


// nested propogation
document.querySelectorAll("*").forEach(el => {
    el.addEventListener("click", e => {
        console.log(`
            ${e.target.nodeName}
            ${e.currentTarget.nodeName}
        `)
        e.stopPropagation()
    })
})

// nav items - stop refresh
const navParent = document.querySelector("nav")
Array.from(navParent.children).forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
    })
})
console.log(navParent.children)