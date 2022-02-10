import './less/index.less'

// Your code goes here!
const logo = document.querySelector(".logo-heading")

logo.addEventListener("mouseover", function() {
    logo.style.backgroundColor = "red"
})

document.addEventListener("keydown", function(){
    logo.style.backgroundColor = "blue"
})

const topImages = document.querySelectorAll("div.img-content img")

function reduceImages(){
    topImages.forEach(item => {
        item.setAttribute("style", "width:25%;")
    })
}

document.addEventListener("wheel", reduceImages)