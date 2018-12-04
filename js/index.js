const logoHeading = document.querySelector(".logo-heading");
const introImg = document.querySelector("header img");
const buttons = document.querySelectorAll(".btn");

logoHeading.addEventListener("mouseover", function() {
    introImg.style.display = "initial";
})

buttons.forEach((btn) => {
    btn.addEventListener("mouseover", function(e) {
        e.target.style.transform = "scale(1.2,1.2)";
    })
    // btn.removeEventListener("mouseover", function(e) {
    //     e.target.style.transform = "scale(1.2,1.2)";
    // })
});