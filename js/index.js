// Your code goes here
const logo = document.querySelector(".logo-heading");
const images = document.querySelectorAll("img");
const background = document.querySelector("body");

logo.addEventListener("mouseover", () =>{
    logo.classList.add("logo-move");
});
logo.addEventListener("mouseleave", () => {
    logo.classList.remove("logo-move");
});

images.forEach((img) => {
    img.addEventListener("mousedown", function() {
        this.style.boxShadow = "10px 10px 5px grey";
        this.style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseup", function(){
        this.style.boxShadow = "";
        this.style.transform = "scale(1)";
    });
});

background.addEventListener("dblclick", () => {
    background.style.backgroundColor = "black";
    background.style.color = "white";
    logo.style.color = "black"
});

