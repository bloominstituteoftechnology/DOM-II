// Your code goes here
const txtcnt = Array.from(document.getElementsByClassName("text-content"));
const navLinks = Array.from(document.getElementsByClassName("nav-link"));
const header = document.querySelector("header");
const logo = document.querySelector(".logo-heading");
const headingImg = document.querySelector("header img");


txtcnt.forEach(e => e.addEventListener("dblclick", () => {
    e.style.display = "none";
  }))

header.addEventListener("click", () => {
    header.style.backgroundColor = "lightblue";
    header.stopPropagation();

})

navLinks.forEach(e => e.addEventListener("click", () => {
    e.stopPropagation();
    e.style.color = "green";
    e.preventDefault();
    

}))

txtcnt.forEach(e => e.addEventListener("mouseover", () => {
    e.style.color = "blue";
}))

navLinks.forEach(e => e.addEventListener("mouseenter", () => {
    e.style.fontSize = '2.5rem';
}))

navLinks.forEach(e => e.addEventListener("mouseleave", () => {
    e.style.fontSize = '1.6rem';
}))

window.addEventListener("resize", () => {
    logo.style.transform = "scale(1.5)";
})

window.addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode === 73) {
        headingImg.style.filter = "invert(100%)"
      } 
})

window.addEventListener("keyup", (e) => {
    if (e.isComposing || e.keyCode === 73) {
        headingImg.style.filter = "invert(0%)"
      }
})

headingImg.addEventListener("dragend", (e) => {
    alert("DONT TAKE THAT. ITS NOT YOURS!");
})

window.addEventListener("scroll", () => {
    headingImg.style.border = "2px solid";
})

TweenMax.to(".logo-heading", 3, {
    backgroundColor: "blue",
    padding: 10, 
    borderColor: "white", 
    borderRadius: 26
});





let btn = document.querySelectorAll('.btn');

btn.forEach(e => {
    e.addEventListener('mouseout', () => {
        // e.style.background='#17A2B8';
        // e.preventDefault();
        e.style.transform='scale(1.0)';
        e.textContent='No More!';
    })

    e.addEventListener('dblclick', () => {
        e.style.background='red';
        e.style.transform='scale(1.5)';
        e.textContent='Stop That!';
    })
});





// });



