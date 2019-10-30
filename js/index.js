// Your code goes here
//Event 1
const logo = document.querySelector("header img");
logo.addEventListener("mouseover", () => {
    logo.style.display= "none";
})
//Event 2
logo.addEventListener("mouseleave", () => {
    logo.style.display = ""
})


//Event 3
const darkMode = document.querySelector("body");
const botWhite = document.querySelectorAll("p, h2, h3, h4");
const acitvateDarkMode = document.querySelector(".btn");
acitvateDarkMode.addEventListener("click", (event) => {
    darkMode.style.backgroundColor = "black";
    botWhite.forEach(element => {
        element.style.color="white";
    })

})
// Event 4
acitvateDarkMode.addEventListener("dblclick", (event) => {
    darkMode.style.backgroundColor = "white";
    botWhite.forEach(element => {
        element.style.color="black";
    })

})
// Event 5
document.addEventListener("keydown", event);
function event(e){
    botWhite.forEach(element => {
        element.style.color= "brown"
    })
    
}
// Event 6
const sizeImg = document.querySelectorAll(".img-content")
document.addEventListener("wheel", scroll);
function scroll(e){
    sizeImg.forEach(element => {
        element.style.transform="scale(1.2)"
    })
}

// Event 7
const colorHeader = document.querySelector(".logo-heading");
colorHeader.addEventListener("auxclick", (event) => {
colorHeader.style.color= "brown"
event.stopPropagation();
})

//Event 8
const stopRefresh = document.querySelector(".nav");
stopRefresh.addEventListener("click", (stop) => {
    stop.preventDefault;
})

//Event 9






