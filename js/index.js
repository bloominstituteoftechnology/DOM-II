// Your code goes here

// Header image

const introImg = document.querySelector(".intro img");

introImg.addEventListener("mouseenter", () => {
    introImg.style.transform = "scale(1.2)";
})

introImg.addEventListener("mouseleave", () => {
    introImg.style.transform = "scale(1)";
})

// Content section

const topContent = document.querySelector(".content-section");

topContent.addEventListener('click', () => {
    topContent.style.backgroundColor="cyan";
})

// Content section img

const topContentImg = document.querySelector(".content-section img");
topContentImg.addEventListener('dblclick', () => {
    topContentImg.src="https://i.imgur.com/U74t7Wf.png";
})

topContentImg.addEventListener('mouseover', () => {
    topContentImg.style.transform = "scale(.5)";
})

topContentImg.addEventListener('mouseout', () => {
    topContentImg.style.transform = "scale(1)";
})

// inverse content section
const bottomContent = document.querySelector(".inverse-content");

window.addEventListener("resize", () => {
    bottomContent.style.color = "papayawhip";
  })

  window.addEventListener("scroll", () => {
    bottomContent.style.color = "red";
  })

const body = document.querySelector("body");

window.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 65) {
        body.style.color = "yellow";
    }
  })

  window.addEventListener("keyup", (event) => {
    if (event.keyCode === 65) {
        alert("enjoy yellow");
    }
  })