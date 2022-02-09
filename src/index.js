import './less/index.less'

// Your code goes here!
// THE LOAD EVENT
window.onload = function(evt) {
    console.log("event ${evt.type} fired! Ready to go!");
    const heading = document.querySelector("h1");
    heading.textContent = "READY TO GO!"

// THE COPY EVENT
    window.addEventListener("copy", () => {
        navigator.clipboard.readText().then(text => {
            console.log(text)
            heading.textContent += text;
        })
    })

// THE CLICK EVENT
document.body.addEventListener("click", evt => {
    evt.target.classList.toggle("mirror")
})

// THE DOUBLE CLICK EVENT
document.body.addEventListener("dblclick", evt => {
    evt.target.innerHTML = ""
})

// THE WHEEL EVENT
const intro = document.querySelectorAll(".intro")
intro.addEventListener("wheel", () => {
    intro.style.fontSize = "35px"
})

// THE SCROLL EVENT
const footer = document.querySelectorAll(".footer")
footer.addEventListener("scroll", () => {
    intro.style.fontWeight = ""
})

// THE KEY DOWN EVENT
window.addEventListener("keydown", evt => {
    if(evt.key === 6){
        document.body.innerHTML = ""
    }
})
// THE MOUSE MOVE EVENT
document.body.addEventListener("mousemove", evt => {
    const {clientX, clientY} = evt
})

// THE MOUSE ENTER EVENT
const destinations = document.querySelectorAll(".destination")
for (let destination of destinations) {
    destination.addEventListener("mouseenter", () => {
        destination.style.fontWeight = "bold"
    })

// THE MOUSE LEAVE EVENT
    destination.addEventListener("mouseleave", () => {
        destination.style.fontWeight = "initial"
    })
}
}





