// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
const introImg = document.querySelector("header img");
const buttons = document.querySelectorAll(".btn");
const contentPick = document.querySelector(".content-pick");
const allImgs = document.querySelectorAll("img");
const allPs = document.querySelectorAll("p");
const container = document.querySelectorAll(".container");
const textContentDiv = document.querySelectorAll(".text-content");
const stopLink = document.querySelector('.nav')
  
  window.addEventListener("scroll", function(e){
      logoHeading.style.transform= "rotate(180deg)";
  })

  window.addEventListener("dblclick", function(e){
    logoHeading.style.transform= "rotate(180deg)";
})
  logoHeading.addEventListener("mouseenter", function() {
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
        newH1.textContent = "Go back and rechoose a better option!";
        newH1.style.padding = "30px 0";
        newH1.style.margin = "0 auto";
        newH1.style.textAlign = "center";
        contentPick.appendChild(newH1);
    })
});

buttons.forEach((img) => {
    img.addEventListener("click", function(e) {
        e.target.style.opacity = "0";
    })
})

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

allImgs.forEach((img) => {
    img.addEventListener("click", function(e) {
        e.target.style.transform = "skewX(360deg)";
    })
});

textContentDiv.forEach((div) => {
    div.addEventListener("mousedown", function(e) {
        e.target.style.backgroundColor = "green";
        e.target.style.color = "red";
    })
})

allPs.forEach((p) => {
    p.addEventListener("mousedown", function(e) {
        e.stopPropagation();
        e.target.style.backgroundColor = "black";
        e.target.style.color = "red";
    })
    p.addEventListener("mouseup", function(e){
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "pink";
    })
});

stopLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked')
})