// Your code goes here


const colors = ["pink", "green", "orange", "blue", "yellow", "purple", "teal", "dodgerblue", "cyan"]

const navbar = Array.from(document.getElementsByClassName("nav-link"))

const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}
navbar.forEach((nav) => {
    nav.addEventListener('mouseover', () => {
        nav.style.color = randomColor()
    })
})

document.addEventListener("keydown", (e) => {
    if (e.code === 'KeyH') {
        navbar[0].style.color = randomColor()
    }

    if (e.code === 'KeyA') {
        navbar[1].style.color = randomColor()
    }

    if (e.code === 'KeyB') {
        navbar[2].style.color = randomColor()
    }

    if (e.code === 'KeyC') {
        navbar[3].style.color = randomColor()
    }
})

const busImg = document.getElementsByTagName("img")[0]

let scale = 1

busImg.addEventListener("wheel", (e) => {
    e.preventDefault()
    
    scale += event.deltaY * -0.001

    e.target.style.transform = `scale(${scale})`
})

busImg.addEventListener("ondragover", (e) => {
    e.preventDefault()
})

busImg.addEventListener("ondrop", (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("h2")
    console.log(data)
    e.target.textContent = data
})

const introH2 = document.getElementById("h2-drag")

introH2.draggable = "true"

introH2.addEventListener("ondragstart", (e) => {
    console.log(e)
    e.dataTransfer.setData("h2", e.target.textContent)
})

const body = document.getElementsByTagName("body")[0]

window.addEventListener("load", () => {
    // let loading = document.createElement("h1")
    // loading.textContent = "Loading..."
    // document.getElementsByTagName("body")[0] = 
    body.style.opacity = 0.5
    setTimeout(() => {
        
        body.style.opacity = 1
    }, 1000)
    
})

Array.from(document.getElementsByClassName("destination")).forEach((dest) => {
    dest.children[0].addEventListener("click", () => {
        console.log(dest.children[2])
        dest.children[2].focus()
    })
})

window.addEventListener("resize", () => {
    console.log(window.innerHeight, window.innerWidth)
})

navbar[0].addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector(".content-section").children[0].children[1]
})

window.addEventListener("scroll", () => {
    console.log(window.scrollY)
})

console.log(document.querySelector(".content-section").children[0].children[1])


