// Your code goes here
const logo = document.querySelector(".logo-heading");
const busImage = document.querySelector(".home .intro img");

logo.addEventListener("mouseover", () =>{
    logo.classList.add("logo-move");
});
logo.addEventListener("mouseleave", () => {
    logo.classList.remove("logo-move");
});

