// "resize"
window.addEventListener("resize", function() {
    console.log("window has been resized")
})
// "load"
window.addEventListener("onload", function() {
    console.log("load complete")
})
// "beforeprint"
window.addEventListener("beforeprint", function() {
    console.log("about to print")
})
// "afterprint"
window.addEventListener("afterprint", function() {
    console.log("printing complete")
})

// "keydown"
document.addEventListener("keydown", function() {
    console.log("a key was pressed")
})

const headerNav = Array.from(document.querySelectorAll(".nav"))
headerNav.forEach(headerNav => {
// "click"
    headerNav.addEventListener("click", event => 
        event.target.style["font-size"] = "1rem"
    )
//  "mouseover"
    headerNav.addEventListener("mouseover", event =>
        event.target.style.color = "gray")
// "mouseout"
    headerNav.addEventListener("mouseout", function(event) {
        event.target.style.color = "";
        event.target.style["font-size"] = "";
    })
})

const headImg = document.querySelector(".intro img")
// "wheel"
headImg.addEventListener("wheel", event =>
    event.target.style.transform = "scale(0.5)"
)

//"pointerleave"
const para = Array.from(document.querySelectorAll("p"))
para.forEach(para => 
    para.addEventListener("pointerleave", event =>
        event.target.style.color = "red")
    )

