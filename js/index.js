// Your code goes here
const mouseOver = document.querySelector(".intro h2")
// console.log(mouseOver)
const clicky = document.querySelector(".container h1")
// console.log(clicky)

mouseOver.addEventListener('mouseover', () => {
    mouseOver.style.color = "red"
})

clicky.addEventListener('click', () => {
clicky.innerHTML = "For everyone!"
})

const key = document.querySelectorAll("nav a")
// console.log(key)
// let scale = 1
// key.addEventListener("wheel", (event)=> {
//     event.preventDefault();

//     scale += event.deltaY * -0.01;
  
//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);
  
//     // Apply scale transform
//     key.style.transform = `scale(${scale})`;

// })

const wheelie = document.querySelector("img")
console.log(wheelie)

wheelie.addEventListener("load", ()=>{

})

const focuse = document.querySelector(".content-section h2")
// console.log(focuse)
focuse.addEventListener("resize", () =>{

})

const scrollie = document.querySelector(".text-content p")
// console.log(scrollie)

scrollie.addEventListener("scroll", () =>{

})

const selecty = document.querySelector(".text-content h2")

selecty.addEventListener("select", () =>{
    console.log("hello")
})