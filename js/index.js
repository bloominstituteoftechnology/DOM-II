// Your code goes here
document.addEventListener("mouseover", element => {
    element.target.style.color = "#8FBC8F";
})
document.addEventListener("mouseout", element => {
    element.target.style.color = "black";
})


let imgCont = document.querySelectorAll(".img-content");
document.addEventListener("keydown ", element => {
    imgCont.forEach(element => {
        element.style.opacity = "0.2 ";
    })
})

document.addEventListener("wheel", element => {
    
})

document.addEventListener("load", element => {
    
})

