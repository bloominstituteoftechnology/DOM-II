// Your code goes here

/*=====image swap with 4seconds delay==== */
let countdown;
let newImg = document.querySelector(".intro img");
newImg.addEventListener("mouseenter", () => {
    countdown = setTimeout(() => {
        newImg.src="img/fun-cat.jpg"
    }, 4000);
    newImg.addEventListener("mouseleave", () => {
        clearTimeout(countdown)
    })
})

// sets the nav background to black while on mouse enter and back to white on mouse leave
let nav = document.querySelector("nav");
nav.addEventListener('mouseenter', () => {
    nav.style.backgroundColor = "black";
    nav.addEventListener('mouseleave', () => {
        nav.style.backgroundColor = "white";
    })
})

//this swaps nav links background to pink on mouse enter and white on mouse leave 
//this also changes the links color themselves on mouse enter and mouse leave
document.querySelectorAll('nav a').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = "pink";
        el.style.color = "blue";
    })
    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = "white";
        el.style.color = "black";
    })
})
