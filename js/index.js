
 const navA = document.querySelectorAll(".nav, a")
document.querySelectorAll(".nav, a").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(3)";
        el.style.color= "red";
        el.style.transition = "all 0.3s";
    })
})
document.querySelectorAll(".nav, a").forEach(el => {
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.color= "black";
        el.style.transition = "all 0.8s";
    })
})

const textContentP = document.querySelector(".text-content, p")

textContentP.addEventListener("click", () =>{
    textContentP.style.color= "red";
    textContentP.style.fontSize= "200%"
})
textContentP.addEventListener("dblclick", () =>{
    textContentP.style.color= "blue";
    textContentP.style.fontSize= "100%"
})

document.querySelectorAll("img").forEach(e => {
    e.addEventListener("dblclick", () => {
        e.style.display = "none";
    })
    e.addEventListener("click", () => {
        e.style.transform  = 'rotate(360000deg)';
        e.style.transition = "all 10s"
        event.stopPropagation();
    })
    
})


document.querySelectorAll('h2').forEach(e => {
    e.addEventListener("mouseover", () => {
        e.style.fontSize = "500%"
    })
    e.addEventListener("dblclick", () => {
        e.style.fontSize = "1000%"
    })
})

const body = document.querySelector("body");
const par = document.querySelectorAll(".btn");

window.addEventListener('scroll', () => {
    body.style.backgroundColor="lightGreen";
    textContentP.style.backgroundColor ="purple";
    body.style.transform = "rotateZ(360deg)"
    body.style.transition = "all 1s"
  })


  document.querySelectorAll("section").forEach(e => { e.addEventListener("click", () => {
        e.style.transform  = 'rotateY(720deg)';
        e.style.transition = "all 10s"
    })
})

