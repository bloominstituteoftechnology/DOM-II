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
    event.preventDefault();

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

let dest = document.querySelectorAll(".content-pick");
dest.forEach(element => {    
    element.addEventListener("focus", event => {
        event.target.style.backgroundColor = "gray";
    })
        
})

let btn = document.querySelectorAll(".btn");
btn.forEach(element => {
    element.addEventListener("click", event => {
        event.focus();
    })
    element.addEventListener("focus", event => {
        event.target.style.backgroundColor = "yellow";
    })
})

let anchor = document.querySelectorAll('a');
anchor.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
    })
})