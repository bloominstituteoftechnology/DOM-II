// Your code goes here


document.addEventListener("mouseover", element => {
    element.target.style.color = "#8FBC8F";
})
document.addEventListener("mouseout", element => {
    element.target.style.color = "black";
})


let imgCont = document.querySelectorAll(".img-content");
document.addEventListener("keydown ", function() {
    imgCont.forEach(element => {
        element.style.opacity = "0.2 ";
    })
})


window.addEventListener("load", event => {
    document.querySelector("body").style.backgroundColor = "#B0E0E6";
})


let p = document.querySelectorAll("p");
document.addEventListener("wheel", element => {
    if(element.deltaY < 0){
        p.forEach(e => {
            e.style.fontSize = ".5rem";
        })
    }
    else if (element.deltaY > 0){
        p.forEach(e => {
            e.style.fontSize = "2rem";
        })
    }
})


