// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
const introImg = document.querySelector("header img");
const buttons = document.querySelectorAll(".btn");
const contentPick = document.querySelector(".content-pick");
const allImgs = document.querySelectorAll("img");
const allPs = document.querySelectorAll("p");
const container = document.querySelectorAll(".container");
const navLinks = document.querySelectorAll(".nav-link");
const textContentDiv = document.querySelectorAll(".text-content");

  
  window.addEventListener("scroll", function(e){
      logoHeading.style.transform= "rotate(45deg)";
  })

  logoHeading.addEventListener("mouseover", function() {
    setTimeout(() => {
        TweenMax.to("header img", 1, {
            opacity: 1
        })
    }, 200);

});


buttons.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        contentPick.style.flexWrap = "wrap";

        const newH1 = document.createElement("h1");
        newH1.textContent = "You picked a great option!";
        newH1.style.padding = "30px 0";
        newH1.style.margin = "0 auto";
        newH1.style.textAlign = "center";
        contentPick.appendChild(newH1);
    })
});

allImgs.forEach((img) => {
    img.addEventListener("dblclick", function(e) {
        e.target.style.transform = "skewX(45deg)";
    })
});

allImgs.forEach((img) => {
    img.addEventListener("drag", function(e) {
        e.target.style.opacity = "0";
    })
})

textContentDiv.forEach((div) => {
    div.addEventListener("mousedown", function(e) {
        e.target.style.backgroundColor = "green";
        e.target.style.color = "red";
    })
    div.addEventListener("mouseup", function(e){
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "black";
    })
})

allPs.forEach((p) => {
    p.addEventListener("mousedown", function(e) {
        e.stopPropagation();
        e.target.style.backgroundColor = "black";
        e.target.style.color = "red";
    })
    p.addEventListener("mouseup", function(e){
        e.target.style.backgroundColor = "purple";
        e.target.style.color = "pink";
    })
});

