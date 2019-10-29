// Your code goes here

/* const test = document.querySelector(".intro");
test.addEventListener("click", (event) => {
   event.target.style.color = "red"; 
});
console.log(test); */

const introImg = document.querySelector("img");
introImg.addEventListener("mouseover", (event) => {
    if (introImg.style.opacity == "1") {
        event.target.style.opacity = "0.5";
    } else {
        event.target.style.opacity = "1";
    }
});

/* window.addEventListener("keydown", event => {
    if (event.target == "g") {
        console.log("You picked the correct button!")
    }
})

console.log(introImg.opacity) */