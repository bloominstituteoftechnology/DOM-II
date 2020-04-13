// Your code goes here
const busImg = document.querySelector("img");

busImg.addEventListener("mouseenter", function() {
<<<<<<< HEAD
    busImg.style.transform = "scale(2.2)";
    busImg.style.transition = "transform 2s";
})

busImg.addEventListener("mouseout", function() {
    busImg.style.transform = "scale(1.0)";
})

const logoHead = document.querySelector(".intro h2");

    logoHead.addEventListener("mouseover", function() {
        logoHead.style.color = "limegreen";

    })

const smallImg = document.querySelector(".img-content");

    smallImg.addEventListener("dblclick", function() {
        smallImg.style.transform = "scale(1.5)";
        smallImg.style.transition = "transform 1s";

    })

const destination = document.querySelector(".destination h4");

    destination.addEventListener("click", function() {
        destination.style.transform = "scale(1.25)";
        destination.style.transition = "transform .5s";
        destination.style.color = "red"
        destination.style.border = "1px solid black";
    })
 
=======
    busImg.style.transform = "scale(2.5)";
})
>>>>>>> f8ecb32c696ac4bf4abe166f281cb15166385e8f
